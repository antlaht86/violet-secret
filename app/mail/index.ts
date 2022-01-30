import nodemailer from "nodemailer";
import invariant from "tiny-invariant";

export async function sendEmail(toEmail: string, link: string) {
  invariant(process.env.GMAIL_USER, "process.env.GMAIL_USER is required");
  invariant(
    process.env.GMAIL_PASSWORD,
    "process.env.GMAIL_PASSWORD is required"
  );
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const text = `Here is a link to your secret: ${link}`;
    console.log(" mail :", text);

    await transporter.sendMail({
      from: "sopiva1001@gmail.com", // sender address
      to: toEmail,
      subject: "Here is a little secret for you",
      html: `<p> <a href=${link}>Click here and find your secret</a></p>`,
      text,
    });
  } catch (error) {
    console.error("👺 mail error:", error);
  }
}
