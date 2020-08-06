import axios from 'axios';

export const PriceApi = axios.create({
    baseURL: 'http://localhost:3000'
});