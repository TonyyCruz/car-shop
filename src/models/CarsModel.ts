import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import { ICar } from '../interfaces/ICar';

const carsMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false,
});

export default class CarsModels extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('CarsModels', carsMongooseSchema)) {
    super(model);
  }
}
