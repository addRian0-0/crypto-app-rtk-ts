import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GET_COIN } from "../store/actions";
import { CoingeckoService } from "../api/Service";
import { useEffect } from "react";
import { RootState } from "../store/store";

interface Props {
    coin_id: string;
}

export default function CardCrypto({ coin_id }: Props) {

    const dispatch = useDispatch();

    const getCoin = async () => {
        const res = await CoingeckoService.getCoin(coin_id);
        console.log(res);
        dispatch({
            type: GET_COIN,
            payload: res.data,
            isLoading: false,
            status: res.status
        });
    }

    const results = useSelector((store: RootState) => store.getCoinInfoReducer, shallowEqual);
    console.log(results);

    useEffect(() => {
        getCoin();
    }, [dispatch, coin_id])

    return (
        <div>CardCrypto</div>
    )
}
