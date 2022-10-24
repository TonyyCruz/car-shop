import { z } from 'zod';
import vehicleZodSchema from './IVehicle';

const MotorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum([
    'Street',
    'Custom',
    'Trail',
  ]),
  engineCapacity: z.number()
    .int()
    .positive()
    .max(2500),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export default MotorcycleZodSchema;