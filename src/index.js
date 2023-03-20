import React from "react";
import ReactDOM from "react-dom/client";
import { DailyWeatherApp } from "./pages/components/DailyForecast";
import Navbar from "./pages/components/Navbar";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <DailyWeatherApp />
    </React.StrictMode>
);
reportWebVitals();
