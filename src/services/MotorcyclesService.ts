import { IModel } from '../interfaces/IModel';
import MotorcycleZodSchema, { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoService from './DefaultService';

export default class MotorcyclesService extends MongoService<IMotorcycle> {
  constructor(private motorcycleModel: IModel<IMotorcycle>) {
    super(motorcycleModel, MotorcycleZodSchema);
  }
}