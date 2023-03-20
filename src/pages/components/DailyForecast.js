import { useState } from "react";
import searchIcon from "../images/serachIcon.svg";

import {
    StyledDIV,
    StyledInput,
    StyledHeading,
    StyledButton,
    StyledP,
    StyledImg,
    StyledSubHeading,
    HeaderBackground,
} from "../styles/commonstyled.js";

function DailyWeatherApp() {
    const [celcius, setCelcius] = useState("celcius");
    const [weatherImg, setWeatherImg] = useState("");
    const [country, setCountry] = useState("country");
    const [inputValue, setInputValue] = useState("");

    const [chartData, setChartData] = useState({});

    const handleClick = () => {
        const API_ENDPOINT = `http://api.weatherapi.com/v1/forecast.json?key=01b4656903724841b8b92404231402&q=${inputValue}&aqi=en`;
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((loggedData) => {
                setCelcius(loggedData.current.feelslike_c);
                setWeatherImg(loggedData.current.condition.icon);
                setCountry(inputValue);

                const dailyTemp = loggedData.forecast.forecastday[0].hour.map(
                    (hour) => {
                        return hour.feelslike_c;
                    }
                );
            });
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledDIV>
            <HeaderBackground>
                <StyledHeading>24 Hour forecast</StyledHeading>
            </HeaderBackground>
            <StyledSubHeading>Input a city or country</StyledSubHeading>
            <StyledInput
                autoCorrect="false"
                value={inputValue}
                onChange={handleInputChange}
            />
            <StyledButton onClick={handleClick}>
                <img
                    style={{ width: "12px", paddingRight: "5px" }}
                    src={searchIcon}
                />
                Search
            </StyledButton>
            <StyledP>
                It is {celcius} degrees celcius in {country}
                <div>
                    <StyledImg src={weatherImg} />
                </div>
            </StyledP>
        </StyledDIV>
    );
}

export default DailyWeatherApp;
