import AbstractController from './AbstractController';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController extends AbstractController<ICar> {
  constructor(private _carsService: IService<ICar>) {
    super(_carsService);
  }
}