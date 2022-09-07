import { CoinDataHistory } from "./CoinDataHistory";
import { CryptoCoin } from "./CoinMarkets";

export interface Action {
    type: string;
    payload: CryptoCoin[] | CryptoCoin | CoinDataHistory;
    isLoading: boolean;
    status: number;
}