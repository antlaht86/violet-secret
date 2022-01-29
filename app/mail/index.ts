import nodemailer from "nodemailer";

export async function sendEmail(toEmail: string, link: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sopiva1001@gmail.com",
      pass: "%V;hmXb6p3&.;P/aBc6(ek:!(nt+.j2%",
    },
  });

  const text = `Tässä linkki salaiseen tietoon: ${link}`;

  await transporter.sendMail({
    from: "sopiva1001@gmail.com", // sender address
    to: toEmail,
    subject: "test",
    html: `<p> <a href=${link}>Painamalla tästä</a></p>`,
    text,
  });
}
