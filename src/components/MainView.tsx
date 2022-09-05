import { useState } from "react";
import { CryptoCoin } from "../interfaces/CoinMarkets";
import CardCrypto from "./CardCrypto";
import Footer from "./Footer";
import MainLoading from "./MainLoading";
import NavBar from "./NavBar";

interface Props {
    data: CryptoCoin[];
}

export default function MainView({ data }: Props) {


    const [cryptoSelect, setCryptoSelect] = useState<string>("");
    const [mesgLoad, setMsgLoad] = useState<string>("Selecciona una criptomoneda.");

    const getInfoCoin = async (coin_id: string) => {
        setCryptoSelect(coin_id)
        console.log(coin_id);
        setMsgLoad("Cargando información de la criptomoneda.");
    }

    return (
        <>
            <NavBar page="Inicio" />
            <div className="main-container">
                <div className="list-card-crypto">
                    <div className="list-cryptos" >
                        <ul >
                            {data.map(coin => {
                                return <li onClick={() => getInfoCoin(coin.id)} className="item" key={coin.id} >
                                    <div className="info-crypto" >
                                        <img src={coin.image} alt={coin.image} />
                                        <p>{coin.name} </p>
                                        <p className="symbol" > {coin.symbol.toUpperCase()}</p>
                                    </div  >
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
