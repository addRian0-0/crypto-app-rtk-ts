
export interface OnlyOneCoin {
    additional_notices: any[];
    asset_platform_id: null;
    block_time_in_minutes: number;
    categories: string[];
    coingecko_rank: number;
    coingecko_score: number;
    community_data: CommunityData;
    community_score: number;
    country_origin: string;
    description: Tion;
    developer_data: DeveloperData;
    developer_score: number;
    genesis_date: Date;
    hashing_algorithm: string;
    id: ID;
    image: Image;
    last_updated: Date;
    links: Links;
    liquidity_score: number;
    localization: Tion;
    market_cap_rank: number;
    market_data: MarketData;
    name: string;
    platforms: Platforms;
    public_interest_score: number;
    public_interest_stats: PublicInterestStats;
    public_notice: null;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    status_updates: any[];
    symbol: string;
    tickers: Ticker[];
}

export interface CommunityData {
    facebook_likes: null;
    reddit_accounts_active_48h: number;
    reddit_average_comments_48h: number;
    reddit_average_posts_48h: number;
    reddit_subscribers: number;
    telegram_channel_user_count: null;
    twitter_followers: number;
}

export interface Tion {
    ar: string;
    bg: string;
    cs: string;
    da: string;
    de: string;
    el: string;
    en: string;
    es: string;
    fi: string;
    fr: string;
    he: string;
    hi: string;
    hr: string;
    hu: string;
    id: string;
    it: string;
    ja: string;
    ko: string;
    lt: string;
    nl: string;
    no: string;
    pl: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    sv: string;
    th: string;
    tr: string;
    uk: string;
    vi: string;
    zh: string;
    "zh-tw": string;
}

export interface DeveloperData {
    closed_issues: number;
    code_additions_deletions_4_weeks: CodeAdditionsDeletions4_Weeks;
    commit_count_4_weeks: number;
    forks: number;
    last_4_weeks_commit_activity_series: number[];
    pull_request_contributors: number;
    pull_requests_merged: number;
    stars: number;
    subscribers: number;
    total_issues: number;
}

export interface CodeAdditionsDeletions4_Weeks {
    additions: number;
    deletions: number;
}

export enum ID {
    Binancecoin = "binancecoin",
    Bitcoin = "bitcoin",
    Ethereum = "ethereum",
    EthereumClassic = "ethereum-classic",
    Solana = "solana",
    WrappedBitcoin = "wrapped-bitcoin",
}

export interface Image {
    large: string;
    small: string;
    thumb: string;
}

export interface Links {
    announcement_url: string[];
    bitcointalk_thread_identifier: null;
    blockchain_site: string[];
    chat_url: string[];
    facebook_username: string;
    homepage: string[];
    official_forum_url: string[];
    repos_url: ReposURL;
    subreddit_url: string;
    telegram_channel_identifier: string;
    twitter_screen_name: ID;
}

export interface ReposURL {
    bitbucket: any[];
    github: string[];
}

export interface MarketData {
    ath: { [key: string]: number };
    ath_change_percentage: { [key: string]: number };
    ath_date: { [key: string]: Date };
    atl: { [key: string]: number };
    atl_change_percentage: { [key: string]: number };
    atl_date: { [key: string]: Date };
    circulating_supply: number;
    current_price: { [key: string]: number };
    fdv_to_tvl_ratio: null;
    fully_diluted_valuation: { [key: string]: number };
    high_24h: { [key: string]: number };
    last_updated: Date;
    low_24h: { [key: string]: number };
    market_cap: { [key: string]: number };
    market_cap_change_24h: number;
    market_cap_change_24h_in_currency: { [key: string]: number };
    market_cap_change_percentage_24h: number;
    market_cap_change_percentage_24h_in_currency: { [key: string]: number };
    market_cap_rank: number;
    max_supply: number;
    mcap_to_tvl_ratio: null;
    price_change_24h: number;
    price_change_24h_in_currency: { [key: string]: number };
    price_change_percentage_14d: number;
    price_change_percentage_14d_in_currency: { [key: string]: number };
    price_change_percentage_1h_in_currency: { [key: string]: number };
    price_change_percentage_1y: number;
    price_change_percentage_1y_in_currency: { [key: string]: number };
    price_change_percentage_200d: number;
    price_change_percentage_200d_in_currency: { [key: string]: number };
    price_change_percentage_24h: number;
    price_change_percentage_24h_in_currency: { [key: string]: number };
    price_change_percentage_30d: number;
    price_change_percentage_30d_in_currency: { [key: string]: number };
    price_change_percentage_60d: number;
    price_change_percentage_60d_in_currency: { [key: string]: number };
    price_change_percentage_7d: number;
    price_change_percentage_7d_in_currency: { [key: string]: number };
    roi: null;
    total_supply: number;
    total_value_locked: null;
    total_volume: { [key: string]: number };
}

export interface Platforms {
    "": string;
}

export interface PublicInterestStats {
    alexa_rank: number;
    bing_matches: null;
}

export interface Ticker {
    base: Base;
    bid_ask_spread_percentage: number;
    coin_id: ID;
    converted_last: { [key: string]: number };
    converted_volume: { [key: string]: number };
    is_anomaly: boolean;
    is_stale: boolean;
    last: number;
    last_fetch_at: Date;
    last_traded_at: Date;
    market: Market;
    target: string;
    target_coin_id?: TargetCoinID;
    timestamp: Date;
    token_info_url: null;
    trade_url: null | string;
    trust_score: TrustScore;
    volume: number;
}

export enum Base {
    Bnb = "BNB",
    Btc = "BTC",
    Etc = "ETC",
    Eth = "ETH",
    Sol = "SOL",
    Wbtc = "WBTC",
    Xbt = "XBT",
}

export interface Market {
    has_trading_incentive: boolean;
    identifier: string;
    name: string;
}

export enum TargetCoinID {
    BinanceUsd = "binance-usd",
    Bitcoin = "bitcoin",
    Tether = "tether",
    UsdCoin = "usd-coin",
}

export enum TrustScore {
    Green = "green",
}
