import React from "react";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"; // Importa `createRoot`
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
