import { IModel } from '../interfaces/IModel';
import MotorcycleZodSchema, { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoService from './MongoService';

export default class MotorcyclesService extends MongoService<IMotorcycle> {
  constructor(private motorcycleModel: IModel<IMotorcycle>) {
    super(motorcycleModel, MotorcycleZodSchema);
  }
}