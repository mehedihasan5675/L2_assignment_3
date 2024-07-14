import { z } from "zod";

const facilityValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),

    pricePerHour: z.number().min(1, "Price Per Hour is required"),

    location: z.string().min(1, " Location is required"),
    isDeleted: z.boolean().default(false).optional(),
  }),
});
const updateFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().min(1, "Description is required").optional(),

    pricePerHour: z.number().min(1, "Price Per Hour is required").optional(),

    location: z.string().min(1, " Location is required").optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const FacilityValidation = {
  facilityValidationSchema,
  updateFacilityValidationSchema,
};
