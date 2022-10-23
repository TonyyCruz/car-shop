import MongoController from './MongoController';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController extends MongoController<ICar> {
  constructor(private _carsService: IService<ICar>) {
    super(_carsService);
  }
}