import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Batmobiles',
  year: 2022,
  color: 'Black',
  buyValue: 90000000,
  doorsQty: 2,
  seatsQty: 2,
}

const carMockWithId:ICar & { _id:string } = {
  _id: '6354cad79fe2a3706be16eb6',
  model: 'Batmobiles',
  year: 2022,
  color: 'Black',
  buyValue: 90000000,
  doorsQty: 2,
  seatsQty: 2,
};

export { carMock, carMockWithId };