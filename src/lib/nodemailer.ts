import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const emailClient = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmailSMTP({
  from,
  to,
  subject,
  html,
}: {
  from?: string;
  to: string | Mail.Address | (string | Mail.Address)[];
  subject: string;
  html: string;
}) {
  const result = await emailClient.sendMail({
    from: from || process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
}

// await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to,
//       subject,
//       text: message,
//       html: `<p>${message}</p>`,
//     });
