import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarsModel from '../../../models/CarsModel';
import { carMock, carMockWithId } from '../mocks/carsMock'

describe('Testa a camada de models "cars"', () => {
  const carsModel = new CarsModel();

  describe('Testa a inserção de um novo carro no banco de dados', () => {

    before(async () => {
      sinon
        .stub(Model, 'create')
        .onCall(0).resolves(carMockWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se é possível inserir um novo carro no banco de dados', async () => {
      const newCar = await carsModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  })


});