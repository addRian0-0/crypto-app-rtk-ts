import { Action } from "../interfaces/Action";
import { CryptoCoin } from "../interfaces/CoinMarkets";
import { GET_COIN, GET_COINS_MARKETS } from "./actions";

export interface CoinsListState {
    isLoading: boolean;
    coinsList: CryptoCoin[];
    error: string;
}

const initialState: CoinsListState = {
    error: "Ocurrió un error",
    isLoading: true,
    coinsList: []
}

export function coinMarketsReducer(state = initialState, { type, payload, isLoading, status }: Action) {

    switch (type) {
        case GET_COINS_MARKETS:
            return {
                coinsListMarket: payload,
                isLoading,
                status
            }

        case GET_COIN:
            return {
                coin: payload
            }
        default:
            return state;
    }

}