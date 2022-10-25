import * as sinon from 'sinon';
import { expect } from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { carMock, carMockWithId } from '../../mocks/carsMock'

describe('Testa a camada de service "cars"', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  describe('Testa a inserção de um novo carro no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsModel, 'create')
        .onCall(0).resolves(carMockWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se é possível inserir um novo carro com dados corretos', async () => {
      const newCar = await carsService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  })


});