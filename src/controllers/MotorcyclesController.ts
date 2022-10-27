import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import AbstractController from './AbstractController';

export default class MotorcyclesController extends AbstractController<IMotorcycle> {
  constructor(private motorcyclesService: IService<IMotorcycle>) {
    super(motorcyclesService);
  }
}