import React from "react";
import ReactDOM from "react-dom/client"; // Importa `createRoot`
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
