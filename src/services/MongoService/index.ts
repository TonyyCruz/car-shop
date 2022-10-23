// import {  } from 'zod';
import { IModel } from '../../interfaces/IModel';
import IService from '../../interfaces/IService';

export default abstract class MongoService<T> implements IService<T> {
  constructor(protected _model: IModel<T>, private _zodSchema: any) {}

  private zodValidate(obj: Partial<T>): void {
    const parsed = this._zodSchema.safeParse(obj);
    if (!parsed.success) throw new Error('');
  }

  public async create(obj: T): Promise<T> {
    this.zodValidate(obj);
    return this._model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this._model.read();
  }

  public async readOne(_id: string): Promise<T> {
    const response = await this._model.readOne(_id);
    if (!response) throw new Error('');
    return response;
  }

  public async update(_id: string, obj: Partial<T>): Promise<T> {
    this.zodValidate(obj);
    const response = this._model.update(_id, { ...obj });
    if (!response) throw new Error('');
    return response as T;
  }

  public async delete(_id: string): Promise<T> {
    return this._model.delete(_id) as T;
  }
}