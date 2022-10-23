import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(protected _model: Model<T>) {}

  public async create(obj: T): Promise<T> {
    return this._model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('');
    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('');
    return this._model.updateOne({ _id }, { ...obj }) as T;
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('');
    return this._model.deleteOne({ _id }) as T;
  }
}
