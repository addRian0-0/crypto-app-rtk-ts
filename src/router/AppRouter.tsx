import { Route, Routes, BrowserRouter } from "react-router-dom";
import CryptoApp from "../CryptoApp";
import CryptoMoreInfo from "../views/CryptoMoreInfo";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/crypto/:id_coin" element={<CryptoMoreInfo />} />
                <Route path="/*" element={<CryptoApp />} />
            </Routes>
        </BrowserRouter>
    )
}
