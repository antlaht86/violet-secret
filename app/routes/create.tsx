import { redirect, Form, useActionData, useTransition } from "remix";
import type { ActionFunction } from "remix";

type FormData = {
  password: string;
  email: string;
  subject: string;
  text: string;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  const errors: Partial<FormData> = {};
  if (!password) errors.password = "Required";
  if (!email) errors.email = "Required";
  if (!subject) errors.subject = "Required";
  if (!text) errors.text = "Required";

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return redirect(`/create/`);
};

export default function Create() {
  const errors = useActionData<Partial<FormData>>();
  const transition = useTransition();
  console.log("Create ~ transition", transition);

  return (
    <div>
      <form method="post">
        <label>
          <input
            placeholder="password"
            name="password"
            type="text"
            autoComplete="off"
          />
          {errors?.password && <span>{errors.password}</span>}
        </label>
        <label>
          <input placeholder="to" name="to" type="email" />
          {errors?.email && <span>{errors.email}</span>}
        </label>
        <label>
          <input placeholder="subject" name="subject"></input>
          {errors?.subject && <span>{errors.subject}</span>}
        </label>
        <label>
          <textarea placeholder="text" name="text"></textarea>
          {errors?.text && <span>{errors.text}</span>}
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
