import React from "react";

const Countries = ({ countries, countryName }) => {
  if (countryName === "") return <div>No country specified</div>;
  const countriesFiltered = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(countryName.toLowerCase());
  });
  if (countriesFiltered.length === 0) {
    return <div>No countries found</div>;
  } else if (countriesFiltered.length === 1) {
    const languages = Object.values(countriesFiltered[0].languages).map(
      (language, index) => {
        return <li key={countriesFiltered[0] + language}>{language}</li>;
      }
    );
    return (
      <>
        <h1>{countriesFiltered[0].name.common}</h1>
        <p>Capital: {countriesFiltered[0].capital[0]}</p>
        <p>Population: {countriesFiltered[0].population}</p>
        <h2>Languages</h2>
        <ul>{languages}</ul>
        <img src={countriesFiltered[0].flags.svg} alt="flag" height="200" />
      </>
    );
  } else if (countriesFiltered.length > 10) {
    return <p>Too many matches, be more specific!</p>;
  } else {
    const countriesList = countriesFiltered.map((country, index) => {
      return <li key={country.name.common + index}>{country.name.common}</li>;
    });
    return <ul>{countriesList}</ul>;
  }
};

export default Countries;
