// Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <Home />
                } />
            </Routes>
        </BrowserRouter>
    );
}