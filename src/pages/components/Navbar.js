import { Outlet, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../styles/navbar.module.css";

import {
    NavElement,
    UnorderedlistElement,
    ListElement,
} from "../styles/commonstyled";

const NavbarInfo = () => {
    const navEndpoints = [
        { name: "Celcius", url: "/" },
        { name: "Fahrenheit", url: "/" },
    ];

    return (
        <>
            <NavElement>
                <div style={{ marginRight: "30px", marginTop: "15px" }}>
                    <UnorderedlistElement>
                        {navEndpoints.map((nav) => (
                            <ListElement key={nav.url}>
                                <Link to={nav.url} href="#footerBegin">
                                    {nav.name}
                                </Link>
                            </ListElement>
                        ))}
                    </UnorderedlistElement>
                </div>
            </NavElement>
            <Outlet />
        </>
    );
};

const Navbar = () => {
    return (
        <BrowserRouter>
            <NavbarInfo />
            <Routes>
                <Route path="/" element={""} />
                <Route path="/contact" element={""} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navbar;
