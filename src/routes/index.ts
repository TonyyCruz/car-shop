import { Router } from 'express';
import carsRoute from './carsRoute';

const routes = Router();

routes.use('/cars', carsRoute);

export default routes;