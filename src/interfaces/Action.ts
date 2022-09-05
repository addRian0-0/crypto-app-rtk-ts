import { CryptoCoin } from "./CoinMarkets";

export interface Action {
    type: string;
    payload: CryptoCoin[] | CryptoCoin;
    isLoading: boolean;
    status: number;
}