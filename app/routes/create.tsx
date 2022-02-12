import {
  Form,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "remix";
import type { ActionFunction } from "remix";
import { setSecret } from "../db/db";
import { v4 as uuidv4 } from "uuid";
import { SecretFormData } from "~/types";
import { encryptPassword, encryptText } from "~/crypto";
import React from "react";
import useClipboard from "react-use-clipboard";
import { Link } from "react-router-dom";

type ErrorsKeys = keyof SecretFormData;
type CustomError = Record<ErrorsKeys, { id: string; message: string }[]>;

const MAX_LENGTH = 32;
const MIN_LENGTH = 5;

export let loader: LoaderFunction = ({ request }) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      request.headers.get("user-agent")!
    );

  return {
    baseUrl: process.env.BASE_URL ?? "http://192.168.1.154:3000",
    isMobile,
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password") as string | null;
  const text = formData.get("text") as string | null;

  const errors: CustomError = {
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
  if (!text) errors.text.push({ id: "required", message: "Is required" });

  for (const [_, value] of Object.entries(errors)) {
    if (value.length > 0) return errors;
  }

  const readId = uuidv4();

  setSecret(
    readId,
    encryptPassword(password as string),
    encryptText(password!, text!)
  );

  return redirect(`/create/?id=${readId}`);
};

export default function Create() {
  let loaderData = useLoaderData<{ baseUrl: string; isMobile: boolean }>();
  const errors = useActionData<CustomError>();
  const isTabletOrMobile = loaderData.isMobile;
  let [searchParams] = useSearchParams();
  let id = searchParams.getAll("id");

  const [isCopied, setCopied] = useClipboard(
    `${loaderData.baseUrl}/read/${id}`,
    {
      successDuration: 1000,
    }
  );

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  if (id[0]) {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mt-14">
          <p
            className={`${
              loaderData.isMobile ? "text-center" : "text-left"
            } text-violet-400`}
          >
            Your secret url is:
          </p>
          <div className="flex items-center">
            <p
              onClick={setCopied}
              className={`cursor-pointer ${
                loaderData.isMobile ? "text-center" : "text-left"
              } ${isCopied ? "text-violet-700" : "text-violet-400"}`}
            >{`${loaderData.baseUrl}/read/${id}`}</p>
            <Link className={"ml-2 text-xl text-violet-400"} to={`/read/${id}`}>
              ►
            </Link>
          </div>

          <button
            onClick={setCopied}
            className="flex mt-5 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACYElEQVRIia1US2gTURQ9LzMpJoZQo5A0XfpfqOjGrRuX4kbdSFWsVitoW0kXIpS68kOtbUMag/WDCC50oSgKuhJ3gihSwSKumiarLiQpUsm7x0WbMW/MTCfFC4/LzJs5n/vufQoB48CRrgFlqQxFoAU3Xj15NB7kP+W3efDosauWCvULsSa6NoZtO/eAAKY/fkC18hOk/NJaj7x99nQoEMGhru7Dtm1lhUxSBEJi7779sOwwCIJsXMDvxUW8f/MSIgQpAFHSWp999/r5izqm3Uhgh+3slUuDyS2bNgIAevoyWKhWEG9fB5AAlxMBgqhWK9iQSCA/eh1KKcx8/5EeHBrOA2hOANIBB4Dek8cxOXUfn+fnISQoAhFCKKAQ6xPtONd9AkopKKWwfetmkKrTEG3gu+q3e9cO5G5eQ6VSWaqnUk4OhULGc32RJkrINOCmANra2hCPxx1AP/AVCbwiHA4jFosZ4F6LaNFBMxIv9Uqpf+psOvAhAADbthGNRr3Bm4g0HfjC/yWJRCJNwevZ+N40YFKc6c9grlQGCac1heIMlgiRTiVxLzfmELgxfAkKYyO+brTWqNVqDnizQ/Z30JdBsVT2VE8K0qkUHuQnGtrUFOE7aIVxfweNwrTWK5fITX/6wkUUS+Xm6kFQiHRHCo/v3oZlWUvgvgSuuDMxGsgBsMozOHV+AMW5sqG+syOFh4WcJ5H/Gbh2p7K3Ajvwwmh50FqNwHdR0PC/Tf8DgbsOBoEIy1+/zawa+tOXaYCYbXxntqnWvZnLw5MA00Iafe9MswjI5QzzG5CzIHoaIf8AaqV5tK6JB74AAAAASUVORK5CYII=" />
            <span>Copy link</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Form
        replace
        className="flex flex-col justify-center items-center mt-14"
        method="post"
      >
        <div className={`m-5 ${isTabletOrMobile ? "w-11/12" : "w-1/2"}`}>
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
        <div className={`m-5 ${isTabletOrMobile ? "w-11/12" : "w-1/2"}`}>
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
      </Form>
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
