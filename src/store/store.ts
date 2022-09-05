import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {coinMarketsReducer } from "./reducers";

export const reducers =  combineReducers({
    coinMarketsReducer
});

export const store = configureStore({
    reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch