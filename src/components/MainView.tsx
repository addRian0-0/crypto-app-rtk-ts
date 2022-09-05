import { useState, FormEvent, useEffect } from "react";
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { CryptoCoin } from "../interfaces/CoinMarkets";
import CardCrypto from "./CardCrypto";
import Footer from "./Footer";
import MainLoading from "./MainLoading";
import NavBar from "./NavBar";
import { buscarCoincidencias } from "../helpers/cryptos";

interface Props {
    data: CryptoCoin[];
}

export default function MainView({ data }: Props) {


    const [cryptoSelect, setCryptoSelect] = useState<string>("");
    const [coinsList, setCoinsList] = useState<CryptoCoin[]>(data);
    const [mesgLoad, setMsgLoad] = useState<string>("Selecciona una criptomoneda.");

    const getInfoCoin = async (coin_id: string) => {
        setCryptoSelect(coin_id)
        setMsgLoad("Cargando información de la criptomoneda.");
    }

    const busqueda = async (e: string) => {
        const coincidencias = buscarCoincidencias(e, data);
        setCoinsList(coincidencias);
    }

    /* useEffect(() => {}, []) */

    return (
        <>
            <NavBar page="Inicio" />
            <div className="main-container">

                <div className="list-card-crypto">

                    <div className="list-cryptos" >
                        <div className="buscador">
                            <input type="text"
                                onChange={(e: FormEvent<HTMLInputElement>) => busqueda(e.currentTarget.value)}
                                placeholder="Buscar criptomonedas" />
                        </div>
                        <ul >
                            <li className="item" >
                                <div className="info-crypto" >
                                    <p>Nombre </p>
                                    <p className="symbol" > Símbolo</p>
                                </div>
                                <div className="info-prices">
                                    <p>Precio</p>
                                    <p>
                                        Precio 24 horas
                                    </p>
                                    <p>Volumen total </p>
                                </div>
                            </li>
                            {coinsList.map(coin => {
                                return <li onClick={() => getInfoCoin(coin.id)} className="item" key={coin.id} >
                                    <div className="info-crypto" >
                                        <img src={coin.image} alt={coin.image} />
                                        <p>{coin.name} </p>
                                        <p className="symbol" > {coin.symbol.toUpperCase()}</p>
                                    </div>
                                    <div className="info-prices">
                                        <p>{coin.current_price}</p>
                                        <p className={coin.price_change_24h < 0 ? "baja" : "alza"} >
                                            {coin.price_change_24h > 0 ? "+" : ""}{coin.price_change_24h.toFixed(12)}
                                        </p>
                                        <p>{coin.total_volume}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="card-crypto" >

                        {
                            cryptoSelect.length === 0 ? <MainLoading message={mesgLoad} /> : <CardCrypto coin_id={cryptoSelect} />
                        }

                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}
