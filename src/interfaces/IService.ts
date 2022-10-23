export default interface IService<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(_id: string): Promise<T>;
  update(_id: string, obj: Partial<T>): Promise<T>;
  delete(_id: string): Promise<T>;
}