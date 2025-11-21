import { z } from "zod";

export const contactSchema = z.object({
  email: z
    .string()
    .min(1, "Имейлът е задължителен")
    .email("Моля въведете валиден имейл адрес"),
  message: z
    .string()
    .min(1, "Съобщението е задължително")
    .max(1000, "Съобщението не може да бъде повече от 1000 символа"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
