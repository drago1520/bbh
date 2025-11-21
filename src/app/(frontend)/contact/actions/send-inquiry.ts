"use server";

import { ErrorLogger, errorLogger } from "@/utils/error";
import { ContactFormData } from "../types";
import { sendEmailSMTP } from "@/lib/nodemailer";

export async function sendInquiry({
  email,
  message,
}: ContactFormData): Promise<{ success: true; message: string } | ErrorLogger> {
  try {
    const result = await sendEmailSMTP({
      html: `<b>${email}</b> изпрати следното съобщение от сайта <b>"${message}"</b>`,
      subject: "Запитване от сайт - BBH",
      to: ["dragomir1520@gmail.com", "info@burgasbh.com", "office@webtact.bg"],
    });
    return { success: true, message: "Съобщението е изпратено. Благодарим!" };
  } catch (e) {
    return errorLogger(e);
  }
}
