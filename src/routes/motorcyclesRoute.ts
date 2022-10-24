import { Router } from 'express';
import MotorcyclesModels from '../models/MotorcyclesModels';
import MotorcyclesService from '../services/MotorcyclesService';
import MotorcyclesController from '../controllers/MotorcyclesController';

const motorcyclesRoute = Router();

const motorcyclesModels = new MotorcyclesModels();
const motorcyclesService = new MotorcyclesService(motorcyclesModels);
const motorcyclesController = new MotorcyclesController(motorcyclesService);

motorcyclesRoute.post('/', (req, res) => motorcyclesController.create(req, res));

motorcyclesRoute.get('/', (req, res) => motorcyclesController.read(req, res));

motorcyclesRoute.get('/:id', (req, res) => motorcyclesController.readOne(req, res));

motorcyclesRoute.put('/:id', (req, res) => motorcyclesController.update(req, res));

motorcyclesRoute.delete('/:id', (req, res) => motorcyclesController.delete(req, res));

export default motorcyclesRoute;