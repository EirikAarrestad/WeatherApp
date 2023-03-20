import React from "react";
import ReactDOM from "react-dom/client";
import DailyWeatherApp from "./pages/components/DailyForecast";
import Table from "./pages/components/Table";
import WeatherApp from "./pages/components/WeatherApp";
import reportWebVitals from "./reportWebVitals";

const tableprops = {
    name: "Header",
    subtext: "Subtext",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Table name={tableprops.name} subtext={tableprops.subtext} />
    </React.StrictMode>
);
reportWebVitals();
