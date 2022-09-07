export interface CoinDataHistory {
    market_caps: Array<number[]>;
    prices: Array<number[]>;
    total_volumes: Array<number[]>;
}

export interface IResult {
    coin_data_history: CoinDataResults;
}

export interface CoinDataResults{
    isLoading: boolean;
    payload: CoinDataHistory[];
    status: number[];
}