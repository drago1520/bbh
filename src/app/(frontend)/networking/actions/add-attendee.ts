'use server';

import { ErrorLogger, errorLogger } from '@/utils/error';
import { z } from 'zod';
import { signUpSchema } from '../types';
import payloadConfig from '@payload-config';
import { getPayload } from 'payload';
import { attendees } from '@/payload-generated-schema';

export async function addAttendee({ email, name, eventId }: z.infer<typeof signUpSchema> & { eventId: string }): Promise<{ success: true } | ErrorLogger> {
  try {
    const config = await payloadConfig;
    const payload = await getPayload({ config: config });

    const { rowCount } = await payload.db.drizzle.insert(attendees).values({ email, name, event: eventId });
    if (!rowCount) throw new Error('Грешка: Няма записан ред в базата данни.');
    return { success: true };
  } catch (e) {
    return errorLogger(e);
  }
}
