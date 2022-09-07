import { FormEvent, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CoingeckoService } from "../api/Service";
import { setDate } from "../helpers/set-date-unix";
import { GET_COIN_DATA_HISTORY } from "../store/actions";
import { RootState } from "../store/store";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { createArray } from "../helpers/arrayStrDates-lapses";
import { IResult } from "../interfaces/CoinDataHistory";
import MainLoading from "./MainLoading";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    currency: string;
}

export default function Grafica({ currency }: Props) {

    const { id_coin } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getData = async () => {
        if (id_coin !== undefined) {
            const dates30 = setDate(30);
            const dates7 = setDate(7);
            const [data7, data30] = await Promise.all([
                CoingeckoService.getCoinMarketDataHistory(id_coin, dates7.anterior, dates7.actual, currency),
                CoingeckoService.getCoinMarketDataHistory(id_coin, dates30.anterior, dates30.actual, currency),
            ]);
            return dispatch({
                type: GET_COIN_DATA_HISTORY,
                payload: [data7.data, data30.data],
                isLoading: false,
                status: [data7.status, data30.status]
            });
        }
        navigate("/", {
            replace: true
        });
    }

    const result: IResult = useSelector((store: RootState) => store.getCoinMarketDataHistory);

    useEffect(() => {
        getData();
    }, [dispatch, id_coin, currency]);

    const options = {
        responsive: true,
        color: "rgb(255, 255, 255)",
        plugins: {
            color: "rgb(255, 255, 255)",
            legend: {
                position: 'top' as const,
                color: "rgb(255, 255, 255)",
            },
            title: {
                display: true,
                color: "rgb(255, 255, 255)",
                text: `Gráfica por ${currency}`,
            }
        },
    };

    const fechaslabels30 = createArray(28);
    const data = {
        labels: fechaslabels30.reverse(),
        datasets: [
            {
                label: 'Precios ultimos 30 dias',
                data: result.coin_data_history.payload ? result.coin_data_history.payload[1].prices.map(price => price[1]) : [1, 2, 3],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Volumen total ultimos 30 dias',
                data: result.coin_data_history.payload ? result.coin_data_history.payload[1].total_volumes.map(price => price[1]) : [1, 2, 3],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, {
                label: 'Límites de mercado ultimos 30 dias',
                data: result.coin_data_history.payload ? result.coin_data_history.payload[1].market_caps.map(price => price[1]) : [1, 2, 3],
                borderColor: 'rgb(255, 183, 3)',
                backgroundColor: 'rgba(255, 183, 3,0.5)',
            }
        ],
    };

    return (
        <div className="data-market-history" >
            {
                result.coin_data_history.isLoading === true ? <MainLoading message="Cargando información de la criptomoneda." />
                    : <>
                        <p className="crypto-name" >Datos de mercado de los ultimos 30 dias por {currency}</p>
                        <Line options={options} data={data} />
                    </>
            }

        </div>
    )
}
