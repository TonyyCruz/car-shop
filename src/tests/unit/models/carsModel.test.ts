import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarsModel from '../../../models/CarsModel';
import { carMock, carMockWithId } from '../../mocks/carsMock'
import { ErrorTypes } from '../../../errors/catalog';

describe('Testa a camada de models "CarsModel"', () => {
  const carsModel = new CarsModel();
  const correctCarId = '6354cad79fe2a3706be16eb6';

  //  ======================  POST  ======================  //
  describe('Testa a função "create"', () => {

    before(async () => {
      sinon
        .stub(Model, 'create')
        .resolves(carMockWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se após a inserção é retornado o objeto inserido com o id gerado', async () => {
      const newCar = await carsModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  })

  //  ======================  GET  ======================  //

  describe('Testa a função "read"', () => {

    before(async () => {
      sinon
        .stub(Model, 'find')
        .resolves([carMockWithId, carMockWithId]);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se é a função "read" retorna um array de carros no formato esperado', async () => {
      const newCar = await carsModel.read();
      expect(newCar).to.be.deep.equal([carMockWithId, carMockWithId]);
    });
  })

  describe('Testa a função "readOne"', () => {

    before(async () => {
      sinon
      .stub(Model, 'findOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    });
  
    after(()=>{
      sinon.restore();
    })

    it('Testa se ao receber um "id" correto, é a função "readOne" retorna um carro no formato esperado', async () => {
      const searchedCar = await carsModel.readOne(correctCarId);
      expect(searchedCar).to.be.deep.equal(carMockWithId);
    });

    it('Testa se ao receber um "id" no formato incorreto, é gerado um o erro "InvalidIdHexadecimal"', async () => {
      let receivedError;
      try {
        await carsModel.readOne('idIncorreto101010');
      } catch (err: any) {
        receivedError = err.message;
      }
      expect(receivedError).to.be.equal(ErrorTypes.InvalidIdHexadecimal);
    });

    it('Testa se caso não encontre um carro com o id enviado retorna "null"', async () => {
      const searchedCar = await carsModel.readOne('6354cad79fe2a3706be16ed7');
      expect(searchedCar).to.be.null;
    });
  })

    //  ======================  PUT  ======================  //

  describe('Testa a função "update"', () => {

    before(async () => {
      sinon
      .stub(Model, 'findOneAndUpdate')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    });
  
    after(()=>{
      sinon.restore();
    })

    it('Testa se ao receber um "id" e um objeto "car" no formato correto, a função "update" retorna o carro atualizado', async () => {
      const searchedCar = await carsModel.update(correctCarId, carMock);
      expect(searchedCar).to.be.deep.equal(carMockWithId);
    });

    it('Testa se ao receber um "id" no formato incorreto, é gerado um o erro "InvalidIdHexadecimal"', async () => {
      let receivedError;
      try {
        await carsModel.update('idIncorreto101010', carMock);
      } catch (err: any) {
        receivedError = err.message;
      }
      expect(receivedError).to.be.equal(ErrorTypes.InvalidIdHexadecimal);
    });

    it('Testa se caso não encontre um carro com o id enviado retorna "null"', async () => {
      const searchedCar = await carsModel.update('6354cad79fe2a3706be16ed7', carMock);
      expect(searchedCar).to.be.null;
    });
  })

        //  ======================  DELETE  ======================  //

  describe('Testa a função "delete"', () => {

    before(async () => {
      sinon
      .stub(Model, 'findOneAndDelete')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    });
  
    after(()=>{
      sinon.restore();
    })

    it('Testa se ao receber um "id" correto, o objeto referenciado é deletado e seu "cadaver" é enviado', async () => {
      const searchedCar = await carsModel.delete(correctCarId);
      expect(searchedCar).to.be.deep.equal(carMockWithId);
    });

    it('Testa se ao receber um "id" no formato incorreto, é gerado um o erro "InvalidIdHexadecimal"', async () => {
      let receivedError;
      try {
        await carsModel.delete('idIncorreto101010');
      } catch (err: any) {
        receivedError = err.message;
      }
      expect(receivedError).to.be.equal(ErrorTypes.InvalidIdHexadecimal);
    });

    it('Testa se caso não encontre um carro com o id enviado retorna "null"', async () => {
      const searchedCar = await carsModel.delete('6354cad79fe2a3706be16ed7');
      expect(searchedCar).to.be.null;
    });
  })
});