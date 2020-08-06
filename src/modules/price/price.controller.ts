import { globalApp } from './../../../server';
import { Request, Response } from 'express';
import PriceService from './price.service';
import PriceModel from './price.model';

const _priceService = new PriceService();

class PriceController {

	async index(request: Request, response: Response) {
		const list = await _priceService.list();

		return response.json(list);
	}

	async show(request: Request, response: Response) {
		const { id } = request.params;

		const price = await _priceService.get(+id);

		return response.json(price);
	}

	async create(request: Request, response: Response) {
		const {
			instrument,
			bid,
			ask,
			date,
		} = request.body;

		const price = await _priceService.add({ instrument, bid, ask, date } as PriceModel);

		globalApp.io.emit('newPrice', price);

		return response.status(201).json(price);
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;

		const {
			instrument,
			bid,
			ask,
			date,
		} = request.body;

		const price = await _priceService.update({ id: +id, instrument, bid, ask, date } as PriceModel);

		globalApp.io.emit('updatePrice', price);

		return response.json(price);
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params;

		await _priceService.delete(+id);

		globalApp.io.emit('deletePrice', +id);

		return response.sendStatus(200);
	}
}

export default new PriceController();