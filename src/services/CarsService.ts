import carZodSchema, { ICar } from '../interfaces/ICar';
import AbstractService from './AbstractService';
import { IModel } from '../interfaces/IModel';

export default class CarsService extends AbstractService<ICar> {
  constructor(private _CarsModel: IModel<ICar>) {
    super(_CarsModel, carZodSchema);
  }
}