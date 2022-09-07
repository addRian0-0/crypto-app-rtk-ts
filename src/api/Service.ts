import { coingeckoApi } from "./coingecko";

export class CoingeckoService {

    static getCoinsMarkets(): Promise<any> {
        return coingeckoApi.get(`coins/markets?vs_currency=usd`);
    }

    static getCoin(coin: string): Promise<any> {
        return coingeckoApi.get(`coins/${coin}`);
    }

    static getCoinMarketDataHistory(
        coin: string, fecha_anterior: number, fecha_actual: number, currency: string
    ): Promise<any> {
        return coingeckoApi.get(
            `coins/${coin}/market_chart/range?vs_currency=${currency}&from=${fecha_anterior}&to=${fecha_actual}`
        );
    }

}