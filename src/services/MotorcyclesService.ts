import { IModel } from '../interfaces/IModel';
import MotorcycleZodSchema, { IMotorcycle } from '../interfaces/IMotorcycle';
import AbstractService from './AbstractService';

export default class MotorcyclesService extends AbstractService<IMotorcycle> {
  constructor(private motorcycleModel: IModel<IMotorcycle>) {
    super(motorcycleModel, MotorcycleZodSchema);
  }
}