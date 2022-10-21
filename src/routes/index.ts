import { Router } from 'express';
import carsRoute from './carsRoute';

const routes = Router();

routes.post('/cars', carsRoute);

export default routes;