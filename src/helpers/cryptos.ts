import { CryptoCoin } from "../interfaces/CoinMarkets";

export const buscarCoincidencias = (termino: string, cryptos: CryptoCoin[]): CryptoCoin[] => {

    let coincidencias: CryptoCoin[] = [];
    let busqueda = termino.toLowerCase();

    cryptos.forEach(crypto => {
        if (crypto.name.toLowerCase().includes(busqueda) || crypto.id.includes(busqueda) || crypto.symbol.includes(busqueda)) {
            coincidencias.push(crypto);
        }
    });

    if (coincidencias.length === 0) {
        return cryptos;
    }
    return coincidencias;
}