import React, { useState, useEffect } from "react";
import axios from "axios";

// save api in local .env file in root folder
const weatherAPI = process.env.REACT_APP_WEATHER_API;

const CountryView = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const languages = Object.values(country.languages).map((language, index) => {
    return <li key={country + language}>{language}</li>;
  });

  const countryName = country.name.common;
  const capital = country.capital[0];

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          capital +
          "&appid=" +
          weatherAPI
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  }, []);

  const windDegToDirection = (deg) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.floor(deg / 22.5 + 0.5) % directions.length];
  };

  const temp = weather ? (weather.main.temp - 273.15).toFixed(1) : null;
  const windSpeed = weather ? weather.wind.speed : null;
  const windDirection = weather ? windDegToDirection(weather.wind.deg) : null;

  return (
    <>
      <h1>{countryName}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>{languages}</ul>
      <img src={country.flags.svg} alt="flag" height="200" />
      <h2>Weather in {capital}</h2>
      <p>
        <strong>temperatures: </strong> {temp} °C
      </p>
      <p>
        <em>wind: </em> {windSpeed} km/h? direction: {windDirection}
      </p>
    </>
  );
};

export default CountryView;
