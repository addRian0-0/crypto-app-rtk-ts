import { FormEvent, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CoingeckoService } from "../api/Service";
import Select from '@mui/material/Select';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { OnlyOneCoin } from "../interfaces/OnlyOneCoin";
import { GET_COIN } from "../store/actions";
import { RootState } from "../store/store";
import { concurrenciesArray } from "../interfaces/Concurrencies";
import MainLoading from "../components/MainLoading";

interface ICurrency {
    currency: string;
}

export default function CryptoMoreInfo() {

    const { id_coin } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [currencie, setCurrencie] = useState<string>("btc");

    const getCoin = async () => {
        if (id_coin !== undefined) {
            const res = await CoingeckoService.getCoin(id_coin);
            return dispatch({
                type: GET_COIN,
                payload: res.data,
                isLoading: false,
                status: res.status
            });
        }
        navigate("/", {
            replace: true
        });
    }

    const result = useSelector((store: RootState) => store.getCoinInfoReducer, shallowEqual);
    let coin: OnlyOneCoin = result.coin.payload;

    const changeCurrency = async (e: string) => {
        setCurrencie(e);
        console.log(JSON.parse(`{ "${e}": "${e}" }`));
    }

    useEffect(() => {
        getCoin();
    }, [dispatch, id_coin])

    return (
        <>
            <NavBar page={id_coin ? id_coin.toUpperCase() : "Error"} />

            <div className="main-container">

                {
                    result.isLoading === true ? <MainLoading message="Cargando información de la criptomoneda." /> :
                        <div className="crypto-page">
                            <div className="crypto-info">
                                <div>
                                    <img src={coin.image.large} alt="" />
                                </div>
                                <div className="text" >
                                    <p className="crypto-attribute" >Nombre: </p>
                                    <p className="crypto-name" >{coin.name}</p>
                                    <p className="crypto-attribute" >Símbolo: </p>
                                    <p className="crypto-name" >{coin.symbol.toUpperCase()}</p>
                                    <div className="crypto-info-text">
                                        <p className="crypto-attribute" >Descripción: </p>
                                        <p>{coin.description.en.replace(/<[^>]+>/g, '')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="market-info">
                                <p className="crypto-name" >Datos de mercado </p>
                                <div className="table-money">
                                    <div>
                                        <p className="crypto-attribute">Concurrencia </p>
                                        <select className="concurrencies-select"
                                            onChange={(e: FormEvent<HTMLSelectElement>) => changeCurrency(e.currentTarget.value)} >
                                            {
                                                concurrenciesArray.map(con => {
                                                    return <option key={con}>{con} </option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <p className="crypto-attribute">ATH</p>
                                        <p>{coin.market_data.ath[currencie]}</p>
                                    </div>
                                    <div>
                                        <p className="crypto-attribute">Precio actual</p>
                                        <p>{coin.market_data.current_price[currencie]}</p>
                                    </div>
                                    <div>
                                        <p className="crypto-attribute">Volumen total</p>
                                        <p>{coin.market_data.total_volume[currencie]}</p>
                                    </div>
                                    <div>
                                        <p className="crypto-attribute">Cambio de precio 24h</p>
                                        <p
                                            className={coin.market_data.price_change_24h_in_currency[currencie] < 0 ? "baja" : "alza"}>
                                            {coin.market_data.price_change_24h_in_currency[currencie]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

                <Footer />
            </div>
        </>
    )
}
