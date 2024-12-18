import { z } from "zod";

export const userFormValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Nam must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must be less than 30 characters.",
    }),

  email: z.string().email({
    message: "Invalid email address.",
  }),

  phone: z.string().refine(
    (value) => {
      const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      return regex.test(value);
    },
    {
      message: "Invalid phone number.",
    }
  ),
});
