import { ActionFunction, redirect, useActionData, useParams } from "remix";
import { getSecret, removeSecret } from "~/db/db";
import { decryptText, encryptPassword } from "~/crypto";
import { CustomError, getInputStyle, inputStyle, labelStyle } from "../create";
import React from "react";

type IActionTypes = "read" | "ready";
type ErrorsKeys = keyof {
  password: string;
};

type IGetHsetAll = {
  password: string;
  text: string;
};

type ICustomError = Record<ErrorsKeys, { id: string; message: string }[]>;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const readId = formData.get("readId");
  const action = formData.get("_action") as IActionTypes;

  if (action === "ready") {
    await removeSecret(readId as string);
    return redirect("/ready");
  }

  const res = (await getSecret(String(readId))) as unknown as IGetHsetAll;

  const errors: ICustomError = {
    password: [],
  };

  if (!password)
    errors.password.push({ id: "required", message: "Is required" });

  if (encryptPassword(password as string) !== res.password)
    errors.password.push({
      id: "notMatch",
      message: "password does not match or there is no secret for you",
    });

  for (const [_, value] of Object.entries(errors)) {
    if (value.length > 0) return errors;
  }

  return decryptText(password as string, res.text);
};

export default function Read() {
  const data = useActionData<string | ICustomError>();
  const params = useParams();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  if (typeof data === "string") {
    return (
      <div className="container mx-auto w-1/2 flex flex-col items-center mt-14">
        <h2 className="mb-3 w-full text-left text-violet-700">Your Secret:</h2>
        <textarea
          disabled
          rows={10}
          name="text"
          className={inputStyle}
          defaultValue={data}
        ></textarea>
        <form
          method="post"
          className="flex flex-col item-center justify-self-center"
        >
          <input
            style={{ visibility: "hidden" }}
            defaultValue={params.readid}
            name="readId"
            type="text"
          />
          <input
            style={{ visibility: "hidden" }}
            defaultValue={"ready"}
            name="_action"
            type="text"
          />
          <button
            aria-label="delete"
            className="mt-14 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
            type="submit"
          >
            Delete this secret
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto w-full flex flex-col justify-center items-center mt-14">
      <form
        method="post"
        className=" w-full flex flex-col justify-center items-center mt-14"
      >
        <input
          style={{ visibility: "hidden" }}
          defaultValue={params.readid}
          name="readId"
          type="text"
        />
        <input
          style={{ visibility: "hidden" }}
          defaultValue={"read"}
          name="_action"
          type="text"
        />
        <div className="m-5 w-1/2">
          <label htmlFor="password" className={labelStyle}>
            Password
          </label>
          <input
            ref={inputRef}
            className={getInputStyle(
              typeof data === "string" ? [] : data?.password
            )}
            name="password"
            type="password"
            autoComplete="off"
          />
          <CustomError data={typeof data === "string" ? [] : data?.password} />
        </div>

        <button
          type="submit"
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded"
        >
          Read
        </button>
      </form>
    </div>
  );
}