import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string()
    .length(3, { message: 'IVehicle' }),
  year: z.number()
    .int()
    .positive()
    .gte(1900)
    .lte(2022),
  color: z.string()
    .length(3),
  status: z.boolean()
    .optional(),
  buyValue: z.number()
    .int()
    .positive(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;

export default vehicleZodSchema;