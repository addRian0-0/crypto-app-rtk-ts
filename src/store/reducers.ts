import { TypeSpecimenOutlined } from "@mui/icons-material";
import { Action } from "../interfaces/Action";
import { CryptoCoin } from "../interfaces/CoinMarkets";
import { GET_COIN, GET_COINS_MARKETS, GET_COIN_DATA_HISTORY } from "./actions";

export interface CoinMarketState {
    coinsListMarket: CoinsListMarket
}

export interface CoinsListMarket {
    payload: CryptoCoin[];
    isLoading: boolean;
    status: number;
}

const initialState: CoinMarketState = {
    coinsListMarket: {
        payload: [],
        isLoading: true,
        status: 0
    }
}

export function coinMarketsReducer(state = initialState, { type, payload, isLoading, status }: Action) {

    switch (type) {
        case GET_COINS_MARKETS:
            return {
                coinsListMarket: {
                    payload,
                    isLoading,
                    status
                }
            }


        default:
            return state;
    }

}

const initialStateGetCoin = {
    error: "Ocurrió un error",
    isLoading: true,
    coin: {}
}

export function getCoinInfoReducer(state = initialStateGetCoin, { type, payload, isLoading, status }: Action) {

    switch (type) {
        case GET_COIN:
            return {
                coin: {
                    payload,
                    isLoading,
                    status
                }
            }
        default:
            return state;
    }

}

const initialStateGetCoinDataHistory = {
    error: "Ocurrió un error",
    isLoading: true,
    coin_data_history: {}
}

export function getCoinMarketDataHistory(state = initialStateGetCoinDataHistory, { type, payload, isLoading, status }: Action) {


    switch (type) {
        case GET_COIN_DATA_HISTORY:
            return {
                coin_data_history: {
                    payload,
                    isLoading,
                    status
                }
            }
        default:
            return state;
    }
}
