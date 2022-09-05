import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { CoingeckoService } from "./api/Service";
import MainContainer from "./components/MainContainer";
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
    <div className="main" >
      {
        results.isLoading === true ? <>
          <MainLoading message="" />
        </> : <>
          <MainContainer />
          {/* {
            results.coinsListMarket.map((res: CryptoCoin) => {
              return <div key={res.id} >{res.id}</div>
            })
          } */}
        </>
      }
    </div>
  )
}

export default App
