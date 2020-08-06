import { PriceApi } from './../../infra/api-price';
import PriceModel from './price.model';

class PriceService {

    async add(price: PriceModel): Promise<PriceModel> {
        const { data } = await PriceApi.post('/prices', price);
        return data;
    }

    async get(id: number): Promise<PriceModel> {
        const { data } = await PriceApi.get(`/prices/${id}`);
        return data;
    }

    async list(): Promise<PriceModel[]> {
        const { data } = await PriceApi.get('/prices');
            
        return data;
    }

    async update(price: PriceModel): Promise<PriceModel> {
        const { data } = await PriceApi.put(`/prices/${price.id}`, price);
        return data;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await PriceApi.delete(`/prices/${id}`);
        return data;
    }
}

export default PriceService;