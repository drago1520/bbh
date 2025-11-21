"use server";

import { ErrorLogger, errorLogger } from "@/utils/error";
import { z } from "zod";
import { signUpSchema } from "../types";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function addAttendee({
  email,
  name,
}: z.infer<typeof signUpSchema> & { eventId: string }): Promise<
  { success: true } | ErrorLogger
> {
  try {
    const config = await payloadConfig;
    const payload = await getPayload({ config: config });

    const newAttendee = await payload.create({
      collection: "attendees",
      data: { email, name },
    });
    if (!newAttendee)
      throw new Error("Грешка: Няма записан ред в базата данни.");
    return { success: true };
  } catch (e) {
    return errorLogger(e);
  }
}
