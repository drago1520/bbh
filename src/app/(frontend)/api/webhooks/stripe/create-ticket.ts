"use server";

import { Attendee, Ticket } from "@/payload-types";
import { ErrorLogger, errorLogger } from "@/utils/error";
import payloadConfig from "@payload-config";
import { getPayload, Where } from "payload";
import { createAttendee } from "./create-attendee";

export async function createTicket({
  ticketData,
  personalInfo,
}: {
  ticketData: Omit<
    Ticket,
    "attendee" | "event" | "id" | "createdAt" | "updatedAt"
  >;
  personalInfo: {
    name?: string | null;
    phone?: string | null;
    email?: string | null;
  };
}): Promise<{ success: true } | ErrorLogger> {
  try {
    const { email, phone } = personalInfo;

    const config = await payloadConfig;
    const payload = await getPayload({ config: config });
    const filter: Where = {
      or: [{ email: { equals: email } }],
    };
    if (phone) filter.or?.push({ phone: { equals: phone } });
    const users = await payload.find({
      collection: "attendees",
      where: filter,
      limit: 1,
      depth: 10,
    });
    let attendee: Attendee;
    if (!users.docs.length) {
      const result = await createAttendee(personalInfo);
      if (!result.success) throw new Error(result.error);
      attendee = result.newAttendee;
    }
    attendee = users.docs[0];
    const events = await payload.find({
      collection: "events",
      where: {
        and: [
          {
            type: {
              equals: "conference",
            },
          },
          {
            active: {
              equals: "true",
            },
          },
        ],
      },
      depth: 10,
      limit: 1,
    });
    const latestConf = events.docs[0];
    if (!latestConf) {
      console.error(`ticketData: `, ticketData);
      console.error(`personalInfo: `, personalInfo);
      throw new Error("Did not find latest conference when somebody paid");
    }
    const newTicket = await payload.create({
      collection: "tickets",
      data: { attendee, event: latestConf.id, ...ticketData },
    });
    if (!newTicket) throw new Error("Could not create a new Ticket");
    return { success: true };
  } catch (e) {
    return errorLogger(e);
  }
}
