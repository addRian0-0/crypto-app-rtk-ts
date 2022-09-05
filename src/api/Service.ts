import { coingeckoApi } from "./coingecko";

export class CoingeckoService {

    static getCoinsMarkets(): Promise<any>{
        return coingeckoApi.get(`coins/markets?vs_currency=usd`);
    }

    static getCoin(coin: string): Promise<any>{
        return coingeckoApi.get(`coins/${coin}`);
    }

}