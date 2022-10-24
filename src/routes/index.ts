import { Router } from 'express';
import carsRoute from './carsRoute';
import motorcyclesRoute from './motorcyclesRoute';

const routes = Router();

routes.use('/cars', carsRoute);
routes.use('/motorcycles', motorcyclesRoute);

export default routes;