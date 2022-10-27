import { ZodObject, ZodRawShape } from 'zod';
import { IModel } from '../../interfaces/IModel';
import IService from '../../interfaces/IService';
import { ErrorTypes } from '../../errors/catalog';

export default abstract class AbstractService<T> implements IService<T> {
  constructor(protected _model: IModel<T>, private _zodSchema: ZodObject<ZodRawShape>) {}

  public async create(obj: unknown): Promise<T> {
    this._zodSchema.parse(obj);
    return this._model.create(obj as T);
  }

  public async read(): Promise<T[]> {
    return this._model.read();
  }

  public async readOne(_id: string): Promise<T> {
    const response = await this._model.readOne(_id);
    if (!response) throw new Error(ErrorTypes.ObjectNotFound);
    return response;
  }

  public async update(_id: string, obj: unknown): Promise<T> {
    this._zodSchema.parse(obj);
    const response = await this._model.update(_id, { ...obj as T });
    if (!response) throw new Error(ErrorTypes.ObjectNotFound);
    return response;
  }

  public async delete(_id: string): Promise<T> {
    const response = await this._model.delete(_id);
    if (!response) throw new Error(ErrorTypes.ObjectNotFound);
    return response;
  }
}