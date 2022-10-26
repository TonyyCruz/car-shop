import { Request, Response, NextFunction } from 'express';
import * as sinon from 'sinon';
import { expect } from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
import { carMock, carMockWithId } from '../../mocks/carsMock'
import { object } from 'joi';

describe('Testa a camada de controller "cars"', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);

  const req = {} as Request;
  const res = {} as Response;
  req.params = {};

    //  ======================  POST  ======================  //
  describe('Testa a função "create" para inserção de um novo carro no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsService, 'create')
        .resolves(carMockWithId);
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se ao receber os dados corretos o carro é inserido e retorna um status 201', async () => {
      req.body = carMock;
      await carsController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });

    it('Testa se ao receber os dados corretos o carro é inserido e no formato esperado', async () => {
      req.body = carMock;
      await carsController.create(req, res);
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

      //  ======================  GET  ======================  //
  describe.only('Testa a função "find" e "findOne" para buscar carro(s) no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsService, 'read')
        .resolves([carMockWithId, carMockWithId]);

      sinon
        .stub(carsService, 'readOne')
        .resolves(carMockWithId);

        sinon.stub(carsService, 'update')
        .resolves(carMockWithId);

        sinon.stub(carsService, 'delete')
        .resolves(carMockWithId);
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = { id: '2' };
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se a função "read" retorna um status "200"', async () => {
      await carsController.read(req, res);      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });

    it('Testa se a função "read" retorna um array de carros no formato esperado', async () => {
      await carsController.read(req, res);      
      expect((res.json as sinon.SinonStub).calledWith([carMockWithId, carMockWithId])).to.be.true;
    });

    it('Testa se a função "readOne" retorna um status "200"', async () => {
      await carsController.readOne(req, res);    
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  
    it('Testa se a função "readOne" retorna um carro no formato esperado', async () => {
      await carsController.readOne(req, res);  
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  })
});