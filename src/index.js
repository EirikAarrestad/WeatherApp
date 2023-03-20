import React from "react";
import ReactDOM from "react-dom/client";
import { DailyWeatherApp } from "./pages/components/DailyForecast";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DailyWeatherApp />
    </React.StrictMode>
);
reportWebVitals();
