import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { CoingeckoService } from "./api/Service";
import MainView from "./components/MainView";
import MainLoading from "./components/MainLoading";
import { CryptoCoin } from "./interfaces/CoinMarkets";
import { GET_COIN, GET_COINS_MARKETS } from "./store/actions";
import { RootState } from "./store/store"

function CryptoApp() {

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

  return (
    <>
      {
        results.coinsListMarket.isLoading === true ? <>
          <MainLoading message="Cargando..." />
        </> : <>
          <MainView data={results.coinsListMarket.payload} />
        </>
      }
    </>
  )
}

export default CryptoApp;
