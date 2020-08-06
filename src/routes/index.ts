import express from 'express';
import pricesRoutes from '../modules/price/price.routes';

const routes = express.Router();

routes.use('/prices', pricesRoutes);

export default routes;