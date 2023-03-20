import { useState } from "react";
import styled from "styled-components";

const StyledDIV = styled.div`
    margin: auto;
    display: block;
    text-align: center;
`;

const StyledInput = styled.input`
    outline: none;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 0;
    font-size: 15px;
`;
const StyledHeading = styled.h1`
    font-size: 50px;
`;
const StyledButton = styled.button``;
const StyledP = styled.p``;
const StyledImg = styled.img`
    position: absolute;
    left: 20px;
    top: 170px;
`;

const TemperaturContainerDiv = styled.div`
    position: absolute;
    top: 210px;
    display: flex;
`;

const StyledSubHeading = styled.p``;

function WeatherApp() {
    const [celcius, setCelcius] = useState("");
    const [weatherImg, setWeatherImg] = useState("");
    const [country, setCountry] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [weekTemp, setWeekTemp] = useState([]);

    const handleClick = () => {
        setCountry(inputValue);
        const API_ENDPOINT = `http://api.weatherapi.com/v1/forecast.json?key=01b4656903724841b8b92404231402&q=${country}&aqi=en`;
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((loggedData) => {
                setCelcius(loggedData.current.feelslike_c);
                setWeatherImg(loggedData.current.condition.icon);
                const forecastday = loggedData.forecast.forecastday[0].hour;
                let counter = 0;
                const temps = [];
                forecastday.forEach((hour) => {
                    if (counter < 7) {
                        temps.push(hour.temp_c);
                        counter++;
                    }
                });
                setWeekTemp(temps);
            });
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledDIV>
            <div style={{ background: "#e9ecef", padding: "20px 30px" }}>
                <StyledHeading>7 Day Forecast</StyledHeading>
            </div>
            <StyledSubHeading>Input a city or country</StyledSubHeading>
            <StyledInput
                autoCorrect="false"
                value={inputValue}
                onChange={handleInputChange}
            />
            <StyledButton onClick={handleClick}>Knapp</StyledButton>
            <StyledP>
                It is {celcius} degrees celcius in {country}
                <StyledImg src={weatherImg} />
            </StyledP>
            <TemperaturContainerDiv>
                {weekTemp.map((temp, index) => (
                    <>
                        <div
                            style={{
                                margin: "10px",
                                padding: "20px;",
                            }}
                        >
                            <StyledHeading key={index}>{temp}</StyledHeading>
                        </div>
                    </>
                ))}
            </TemperaturContainerDiv>
        </StyledDIV>
    );
}

export default WeatherApp;
