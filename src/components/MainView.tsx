import { CryptoCoin } from "../interfaces/CoinMarkets";
import NavBar from "./NavBar";

interface Props {
    data: CryptoCoin[];
}

export default function MainView({ data }: Props) {
    return (
        <>
            <NavBar page="Inicio" />
            <div className="main-container" >
                <ul>
                    {
                        data.map(coin => {
                            return <li className="item-coins-market" key={coin.id} >
                                <div className="info-main" >
                                    <img className="img-coin" src={coin.image} alt="" />
                                    <div className="info-coin" >
                                        <p>{coin.name} </p>
                                        <p className="symbol" > {coin.symbol.toUpperCase()}</p>
                                    </div>
                                </div  >
                                <div className="info-prices" >
                                    <p>{coin.current_price}</p>
                                    <p className={coin.price_change_24h < 0 ? "baja" : "alza"} >
                                        {coin.price_change_24h > 0 ? "+" : ""}{coin.price_change_24h}
                                    </p>
                                    <p>{coin.total_volume}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
