import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { CoingeckoService } from "./api/Service";
import MainView from "./components/MainView";
import MainLoading from "./components/MainLoading";
import { CryptoCoin } from "./interfaces/CoinMarkets";
import { GET_COIN, GET_COINS_MARKETS } from "./store/actions";
import { CoinsListState } from "./store/reducers";
import { RootState } from "./store/store"

function App() {

  const dispatch = useDispatch();

  const getCoinsList = async () => {
    const res = await CoingeckoService.getCoinsMarkets();
    dispatch({
      type: GET_COINS_MARKETS,
      payload: res.data,
      isLoading: false,
      status: res.status
    });
  }

  useEffect(() => {
    getCoinsList();
  }, [dispatch]);

  const results = useSelector((store: RootState) => store.coinMarketsReducer, shallowEqual);
  console.log(results);

  return (
    <>
      {
        results.isLoading === true ? <>
          <MainLoading message="" />
        </> : <>
          <MainView data={results.coinsListMarket} />
        </>
      }
    </>
  )
}

export default App
