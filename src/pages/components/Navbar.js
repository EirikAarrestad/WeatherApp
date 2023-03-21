import { Outlet, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../styles/navbar.module.css";

import {
    TemperatureNavContainer,
    TemperatureUnitList,
    TemperatureUnitListItem,
} from "../styles/commonstyled";

const TemperatureUnitLinks = () => {
    const temperatureUnitEndpoints = [
        { name: "Celcius", url: "/celcius" },
        { name: "Fahrenheit", url: "/fahrenheit" },
    ];

    return (
        <>
            <TemperatureNavContainer>
                <div style={{ marginRight: "30px", marginTop: "15px" }}>
                    <TemperatureUnitList>
                        {temperatureUnitEndpoints.map((endpoint) => (
                            <TemperatureUnitListItem key={endpoint.url}>
                                <Link to={endpoint.url}>{endpoint.name}</Link>
                            </TemperatureUnitListItem>
                        ))}
                    </TemperatureUnitList>
                </div>
            </TemperatureNavContainer>
            <Outlet />
        </>
    );
};

const TemperatureUnitNav = () => {
    return (
        <BrowserRouter>
            <TemperatureUnitLinks />
            <Routes>
                <Route path="/celcius" element={""} />
                <Route path="/fahrenheit" element={""} />
            </Routes>
        </BrowserRouter>
    );
};

export default TemperatureUnitNav;
