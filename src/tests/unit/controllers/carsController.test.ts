import { Request, Response, NextFunction } from 'express';
import * as sinon from 'sinon';
import { expect } from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
import { carMock, carMockWithId } from '../../mocks/carsMock'

describe('Testa a camada de controller "cars"', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  const req = {} as Request;
  const res = {} as Response;

  describe('Testa a inserção de um novo carro no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsService, 'create')
        .onCall(0).resolves(carMockWithId);
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se ao receber os dados corretos o carro é inserido com sucesso', async () => {
      req.body = carMock;
      await carsController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  })


});