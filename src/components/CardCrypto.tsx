import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GET_COIN } from "../store/actions";
import { CoingeckoService } from "../api/Service";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { OnlyOneCoin } from "../interfaces/OnlyOneCoin";

interface Props {
    coin_id: string;
}

export default function CardCrypto({ coin_id }: Props) {

    const dispatch = useDispatch();

    const getCoin = async () => {
        const res = await CoingeckoService.getCoin(coin_id);
        dispatch({
            type: GET_COIN,
            payload: res.data,
            isLoading: false,
            status: res.status
        });
    }

    const result = useSelector((store: RootState) => store.getCoinInfoReducer, shallowEqual);
    let coin: OnlyOneCoin = result.coin.payload

    useEffect(() => {
        getCoin();
    }, [dispatch, coin_id])

    return (
        <div className="crypto-info" >
            <div className="crypto-img">
                <img src={coin.image.thumb} alt={coin.name} />
            </div>
            <p>{coin.name}</p>
            <p>{coin.description.en}</p>
        </div>
    )
}
