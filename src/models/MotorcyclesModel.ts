import { Schema, model as mongooseCreateModel } from 'mongoose';
import MongoModel from './MongoModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const MotorcyclesMongooseSchema = new Schema<IMotorcycle>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: 'Street' || 'Custom' || 'Trail',
  engineCapacity: Number,
});

export default class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(private model = mongooseCreateModel('MotorcyclesModel', MotorcyclesMongooseSchema)) {
    super(model);
  }
}