import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string()
    .length(3, { message: 'IVehicle' }),
  year: z.number()
    .int()
    .positive()
    .min(1900)
    .max(2022),
  color: z.string()
    .length(3),
  status: z.boolean()
    .optional(),
  buyValue: z.number()
    .int(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;

export default vehicleZodSchema;