import { z } from "zod";

// Todo. Create your own zod validation here. Below i show a simple validation that only receive one item from the frontend.

const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    password: z.string().max(20),

    email: z
      .string()
      .email("{VALUE} is not a valid email type")
      .min(1, "Email is required"),
    phone: z.string().min(1, "Contact Number is required"),

    address: z.string().min(1, " Address is required"),
  }),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    password: z.string().max(20).optional(),

    phone: z.string().min(1, "Contact Number is required").optional(),

    address: z.string().min(1, " Address is required").optional(),
  }),
});
export const UserValidation = {
  userValidationSchema,
  updateUserValidationSchema,
};
