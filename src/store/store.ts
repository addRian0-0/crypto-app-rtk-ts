import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinMarketsReducer, getCoinInfoReducer, getCoinMarketDataHistory } from "./reducers";

export const reducers = combineReducers({
    coinMarketsReducer,
    getCoinInfoReducer,
    getCoinMarketDataHistory
});

export const store = configureStore({
    reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch