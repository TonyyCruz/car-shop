import { Router } from 'express';
import CarsModels from '../models/CarsModel';
import CarsService from '../services/CarsService';
import CarsController from '../controllers/CarsController';

const carsRoute = Router();

const carsModels = new CarsModels();
const carsService = new CarsService(carsModels);
const carsController = new CarsController(carsService);

carsRoute.post('/', (req, res) => carsController.create(req, res));

carsRoute.get('/', (req, res) => carsController.read(req, res));

export default carsRoute;