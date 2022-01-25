import React from "react";

const CountryView = ({ country }) => {
  const languages = Object.values(country.languages).map((language, index) => {
    return <li key={country + language}>{language}</li>;
  });
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>{languages}</ul>
      <img src={country.flags.svg} alt="flag" height="200" />
    </>
  );
};

export default CountryView;
