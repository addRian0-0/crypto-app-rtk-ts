import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GET_COIN } from "../store/actions";
import { CoingeckoService } from "../api/Service";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { OnlyOneCoin } from "../interfaces/OnlyOneCoin";
import MainLoading from "./MainLoading";
import { Link } from "react-router-dom";

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
        <>
            {
                result.isLoading === true ? <MainLoading message="Cargando información de la criptomoneda." /> :
                    <div className="crypto-info" >
                        <div className="crypto-img">
                            <img src={coin.image.large} alt={coin.name} />
                        </div>
                        <p className="crypto-attribute" >Nombre: </p>
                        <p className="crypto-name" >{coin.name} - {coin.symbol.toUpperCase()}</p>
                        <div className="crypto-info-text">
                            <p className="crypto-attribute" >Descripción: </p>
                            <p>{coin.description.en.replace(/<[^>]+>/g, '')}</p>
                        </div>
                        <Link to={`/crypto/${coin.id}`}>
                            Más información
                        </Link>
                    </div>
            }
        </>
    )
}
