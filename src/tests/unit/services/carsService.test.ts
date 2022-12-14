import * as sinon from 'sinon';
import { expect } from 'chai';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { carMock, carMockWithId } from '../../mocks/carsMock'
import { ErrorTypes } from '../../../errors/catalog'

describe('Testa a camada de service "carsService"', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  const correctCarId = '6354cad79fe2a3706be16eb6';

    //  ======================  POST  ======================  //
  describe('Testa a função "create" para inserção de um novo carro no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsModel, 'create')
        .resolves(carMockWithId);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('Testa se é possível inserir um novo carro com dados corretos', async () => {
      const newCar = await carsService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });

    it('Testa se é gerado um erro ao enviar menos de 3 caracteres no atributo "model" do objeto "car"',
      async () => {
        let errorMessage;
      const incorrectObject = { ...carMock, model: 'B' }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Should be at least 3 characters');
    });

    it('Testa se é gerado um erro ao enviar um tipo incorreto no atributo "model" do objeto "car"',
    async () => {
      let errorMessage;
    const incorrectObject = { ...carMock, model: 22 }
    try {
      await carsService.create(incorrectObject);
    } catch (err: any) {
      const [objError] = err.issues
      errorMessage = objError.message;
    }
    expect(errorMessage).to.be.deep.equal('Expected string, received number');
  });

    it('Testa se é gerado um erro ao enviar um numero maior que 2022 no atributo "year" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, year: 2023 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 2022');
    });

    it('Testa se é gerado um erro ao enviar um numero menor que 1900 no atributo "year" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, year: 1899 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 1900');
    })

    it('Testa se é gerado um erro ao enviar um tipo errado no atributo "year" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, year: '2000' }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected number, received string');
    })

    it('Testa se é gerado um erro ao enviar menos de 3 caracteres no atributo "color" do objeto "car"',
      async () => {
        let errorMessage;
      const incorrectObject = { ...carMock, color: 're' }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Should be at least 3 characters');
    });

    it('Testa se é gerado um erro ao enviar um tipo errado no atributo "color" do objeto "car"',
    async () => {
      let errorMessage;
    const incorrectObject = { ...carMock, color: true }
    try {
      await carsService.create(incorrectObject);
    } catch (err: any) {
      const [objError] = err.issues
      errorMessage = objError.message;
    }
    expect(errorMessage).to.be.deep.equal('Expected string, received boolean');
  });

    it('Testa se é gerado um erro ao enviar um numero negativo no atributo "buyValue" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, buyValue: - 2 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
    });

    it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "buyValue" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, buyValue: 1899.5 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected integer, received float');
    });

    it('Testa se é gerado um erro ao enviar um tipo incorreto no atributo "buyValue" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, buyValue: [] }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected number, received array');
    });

    it('Testa se é gerado um erro ao enviar um numero maior que 4 no atributo "doorsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, doorsQty: 5 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 4');
    });

    it('Testa se é gerado um erro ao enviar um numero menor que 2 no atributo "doorsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, doorsQty: 1 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 2');
    });

    it('Testa se é gerado um erro ao enviar um numero negativo no atributo "doorsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, doorsQty: - 1 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
    });

    it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "doorsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, doorsQty: 2.5 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected integer, received float');
    });

    it('Testa se é gerado um erro ao enviar um tipo invalido no atributo "doorsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, doorsQty: {} }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected number, received object');
    });

    it('Testa se é gerado um erro ao enviar um numero maior que 7 no atributo "seatsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, seatsQty: 8 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 7');
    });

    it('Testa se é gerado um erro ao enviar um numero menor que 2 no atributo "seatsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, seatsQty: 1 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 2');
    });

    it('Testa se é gerado um erro ao enviar um numero negativo no atributo "seatsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, seatsQty: - 1 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
    });

    it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "seatsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, seatsQty: 5.2 }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected integer, received float');
    });

    it('Testa se é gerado um erro ao enviar um tipo invalido no atributo "seatsQty" do objeto "car"',
    async () => {
      let errorMessage;
      const incorrectObject = { ...carMock, seatsQty: '5' }
      try {
        await carsService.create(incorrectObject);
      } catch (err: any) {
        const [objError] = err.issues
        errorMessage = objError.message;
      }
      expect(errorMessage).to.be.deep.equal('Expected number, received string');
    });
  });

  //  ======================  GET  ======================  //
  describe('Testa a "read" e "ReadOne" para buscar carro(s) no banco de dados', () => {

    before(async () => {
      sinon
        .stub(carsModel, 'read')
        .resolves([carMockWithId, carMockWithId]);

      sinon
      .stub(carsModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null)
    });
  
    after(()=>{
      sinon.restore();
    })

    it('Testa se a função "read" traz um array de carros no formato esperado', async () => {
      const cars = await carsService.read();
      expect(cars).to.be.deep.equal([carMockWithId, carMockWithId]);
    });

    it('Testa se a função "readOne" traz um carro no formato esperado', async () => {
      const cars = await carsService.readOne(correctCarId);
      expect(cars).to.be.deep.equal(carMockWithId);
    });

    it('Testa se a função "readOne" gera um erro ao receber um id invalido', async () => {
      let errorMessage;
      try {
        await carsService.readOne('incorrectId');
      } catch (err: any) {
        errorMessage = err.message;
      }
      expect(errorMessage).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

    //  ======================  PUT  ======================  //
    describe('Testa a função "update" para atualizar um carro no banco de dados', () => {

      before(async () => {
        sinon
          .stub(carsModel, 'update')
          .onCall(0).resolves(null)
          .resolves(carMockWithId)
      });
    
      after(()=>{
        sinon.restore();
      })

      it('Testa se é gerado um erro ao não encontrar um carro com o id enviado',
      async () => {
        const incorrectCarId = 'incorrectId';
        let errorMessage;
        try {
          await carsService.update(incorrectCarId, carMock);
        } catch (err: any) {
          errorMessage = err.message;
        }
        expect(errorMessage).to.be.deep.equal(ErrorTypes.ObjectNotFound);
      });
    
      it('Testa se é possível atualizar um carro com dados corretos', async () => {
        const newCar = await carsService.update(correctCarId, carMock);
        expect(newCar).to.be.deep.equal(carMockWithId);
      });
  
      it('Testa se é gerado um erro ao enviar menos de 3 caracteres no atributo "model" do objeto "car"',
        async () => {
          let errorMessage;
        const incorrectObject = { ...carMock, model: 'B' }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Should be at least 3 characters');
      });
  
      it('Testa se é gerado um erro ao enviar um numero maior que 2022 no atributo "year" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, year: 2023 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 2022');
      });
  
      it('Testa se é gerado um erro ao enviar um numero menor que 1900 no atributo "year" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, year: 1899 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 1900');
      })
  
      it('Testa se é gerado um erro ao enviar menos de 3 caracteres no atributo "color" do objeto "car"',
        async () => {
          let errorMessage;
        const incorrectObject = { ...carMock, color: 're' }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Should be at least 3 characters');
      });
  
      it('Testa se é gerado um erro ao enviar um numero negativo no atributo "buyValue" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, buyValue: - 2 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
      });
  
      it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "buyValue" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, buyValue: 1899.5 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Expected integer, received float');
      });
  
      it('Testa se é gerado um erro ao enviar um numero maior que 4 no atributo "doorsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, doorsQty: 5 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 4');
      });
  
      it('Testa se é gerado um erro ao enviar um numero menor que 2 no atributo "doorsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, doorsQty: 1 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 2');
      });
  
      it('Testa se é gerado um erro ao enviar um numero negativo no atributo "doorsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, doorsQty: - 1 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
      });
  
      it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "doorsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, doorsQty: 2.5 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Expected integer, received float');
      });
  
      it('Testa se é gerado um erro ao enviar um numero maior que 7 no atributo "seatsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, seatsQty: 8 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be less than or equal to 7');
      });
  
      it('Testa se é gerado um erro ao enviar um numero menor que 2 no atributo "seatsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, seatsQty: 1 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than or equal to 2');
      });
  
      it('Testa se é gerado um erro ao enviar um numero negativo no atributo "seatsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, seatsQty: - 1 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Value should be greater than 0');
      });
  
      it('Testa se é gerado um erro ao enviar um numero não inteiro no atributo "seatsQty" do objeto "car"',
      async () => {
        let errorMessage;
        const incorrectObject = { ...carMock, seatsQty: 5.2 }
        try {
          await carsService.update(correctCarId, incorrectObject);
        } catch (err: any) {
          const [objError] = err.issues
          errorMessage = objError.message;
        }
        expect(errorMessage).to.be.deep.equal('Expected integer, received float');
      });
    });

      //  ======================  DELETE  ======================  //
    describe('Testa a função "delete" para excluir um carro no banco de dados', () => {

      before(async () => {
        sinon
          .stub(carsModel, 'delete')
          .onCall(0).resolves(null)
          .resolves(carMockWithId)
      });
    
      after(()=>{
        sinon.restore();
      })

      it('Testa se é gerado um erro ao não encontrar um carro com o id enviado',
      async () => {
        const incorrectCarId = 'incorrectId';
        let errorMessage;
        try {
          await carsService.delete(incorrectCarId);
        } catch (err: any) {
          errorMessage = err.message;
        }
        expect(errorMessage).to.be.deep.equal(ErrorTypes.ObjectNotFound);
      });
    
      it('Testa se é possível excluir um carro com o id correto, e se o carro excluido é retornado', async () => {
        const newCar = await carsService.delete(correctCarId);
        expect(newCar).to.be.deep.equal(carMockWithId);
      });
    });
});