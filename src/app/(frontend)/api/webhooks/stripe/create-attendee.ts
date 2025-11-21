"use server";

import { Attendee } from "@/payload-types";
import { ErrorLogger, errorLogger } from "@/utils/error";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";

export async function createAttendee(
  attendee: Omit<Attendee, "id" | "createdAt" | "updatedAt">,
): Promise<{ success: true; newAttendee: Attendee } | ErrorLogger> {
  try {
    const config = await payloadConfig;
    const payload = await getPayload({ config: config });

    const newAttendee = await payload.create({
      collection: "attendees",
      data: attendee,
    });
    if (!newAttendee) throw new Error("Couldn't create a new attendee");
    return { success: true, newAttendee };
  } catch (e) {
    return errorLogger(e);
  }
}
