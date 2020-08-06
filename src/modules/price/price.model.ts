export default interface PriceModel {
    id: number;
    instrument: string;
    bid: number;
    ask: number;
    date: Date;
}