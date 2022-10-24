import carZodSchema, { ICar } from '../interfaces/ICar';
import MongoService from './DefaultService';
import { IModel } from '../interfaces/IModel';

export default class CarsService extends MongoService<ICar> {
  constructor(private _CarsModel: IModel<ICar>) {
    super(_CarsModel, carZodSchema);
  }
}