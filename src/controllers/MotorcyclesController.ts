import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoController from './MongoController';

export default class MotorcyclesController extends MongoController<IMotorcycle> {
  constructor(private motorcyclesService: IService<IMotorcycle>) {
    super(motorcyclesService);
  }
}