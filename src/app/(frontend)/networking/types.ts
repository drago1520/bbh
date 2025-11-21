import z from "zod";

export const signUpSchema = z.object({
  email: z.string().email({ message: "Невалиден имейл. Трябва да има @ и ." }),
  name: z.string().min(3, { message: "Моля въведете име с поне 3 букви" }),
});
