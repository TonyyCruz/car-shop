import { Request, Response } from 'express';
import IService from '../../interfaces/IService';
import IController from '../../interfaces/IController';

export default abstract class MongoController<T> implements IController {
  constructor(protected _service: IService<T>) {}

  public async create(req: Request, res: Response): Promise<Response> {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }
  
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.delete(id);
    return res.status(201).json(result);
  }
}