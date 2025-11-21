import { z } from "zod/v4";

export const signupSchema = z.object({
  email: z.email("Невалиден имейл. Трябва да съдържа @ и ."),
});
