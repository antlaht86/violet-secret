import { redirect, useActionData } from "remix";
import type { ActionFunction } from "remix";
import { setSecret } from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { SecretFormData } from "~/types";
import { encryptPassword, encryptText } from "~/crypto";
import { sendEmail } from "~/mail";
import React from "react";
type ErrorsKeys = keyof SecretFormData;
type CustomError = Record<ErrorsKeys, { id: string; message: string }[]>;

const MAX_LENGTH = 32;
const MIN_LENGTH = 5;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;
  const text = formData.get("text") as string | null;

  const errors: CustomError = {
    email: [],
    password: [],
    text: [],
  };

  if (!password) {
    errors.password.push({ id: "required", message: "Is required" });
  } else {
    if (password?.length < MIN_LENGTH) {
      errors.password.push({
        id: "minLength",
        message: "password is too short",
      });
    } else if (password?.length > MAX_LENGTH) {
      errors.password.push({
        id: "maxLength",
        message: "password is too long",
      });
    }
  }
  if (!email) errors.email.push({ id: "required", message: "Is required" });
  if (!text) errors.text.push({ id: "required", message: "Is required" });

  for (const [_, value] of Object.entries(errors)) {
    if (value.length > 0) return errors;
  }

  const readId = uuidv4();

  await setSecret(
    readId,
    encryptPassword(password as string),
    encryptText(password!, text!)
  );

  const baseUrl = process.env.BASE_URL ?? "http://192.168.1.154:3000";
  sendEmail(email as string, `${baseUrl}/read/${readId}`);

  return redirect(`/read/${readId}`);
};

export default function Create() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const errors = useActionData<CustomError>();

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col justify-center items-center mt-14"
        method="post"
      >
        <div className="m-5 w-1/2">
          <label htmlFor="password" className={labelStyle}>
            Password
          </label>
          <input
            ref={inputRef}
            maxLength={MAX_LENGTH}
            className={getInputStyle(errors?.password)}
            minLength={MIN_LENGTH}
            name="password"
            type="text"
            autoComplete="off"
          />
          <CustomError data={errors?.password} />
        </div>
        <div className="m-5 w-1/2">
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            name="email"
            className={getInputStyle(errors?.email)}
            type="email"
          />
          <CustomError data={errors?.email} />
        </div>
        <div className="m-5 w-1/2">
          <label className={labelStyle} htmlFor="text">
            Secret text
          </label>
          <textarea
            rows={10}
            name="text"
            className={getInputStyle(errors?.text)}
          ></textarea>
          <CustomError data={errors?.text} />
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export function CustomError({
  data,
}: {
  data: { id: string; message: string }[] | undefined;
}) {
  if (data && Array.isArray(data) && data.length > 0) {
    return (
      <ul>
        {data.map((item) => (
          <li className="pl-1 mt-1 text-red-500 text-xs italic" key={item.id}>
            {item.message}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="invisible">Error space</li>
      </ul>
    );
  }
}

export const inputStyle =
  "shadow appearance-none border rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
export const inputErrorStyle =
  "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-violet-500  leading-tight focus:outline-none focus:shadow-outline";
export const labelStyle = "block text-violet-500 text-sm font-bold mb-2";

export function getInputStyle(
  data: { id: string; message: string }[] | undefined
) {
  if (data && Array.isArray(data) && data.length > 0) {
    console.log(data);
    return inputErrorStyle;
  } else {
    return inputStyle;
  }
}
