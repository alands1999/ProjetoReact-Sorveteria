import Home from "../Paginas/Home";
import Sabores from "../Paginas/Sabores";
import Sobre from "../Paginas/Sobre";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="sabores" element={<Sabores/>}></Route>
                <Route path="sobre" element={<Sobre/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}