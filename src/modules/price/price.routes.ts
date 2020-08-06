import express from 'express';

import priceController from './price.controller';

const routes = express.Router();

routes.get('/', priceController.index);
routes.get('/:id', priceController.show);
routes.post('/', priceController.create);
routes.put('/:id', priceController.update);
routes.delete('/:id', priceController.delete);

export default routes;