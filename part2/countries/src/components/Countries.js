import React, { useState } from "react";
import CountryView from "./CountryView";

const Countries = ({ countries, countryName }) => {
  //   const [showState, setShowState] = useState(false);
  const [shownCountry, setShownCountry] = useState(null);

  const showCountry = (country) => () => {
    if (shownCountry === null) {
      setShownCountry(country);
    } else {
      setShownCountry(null);
    }
  };

  if (countryName === "") return <div>No country specified</div>;
  const countriesFiltered = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(countryName.toLowerCase());
  });
  if (countriesFiltered.length === 0) {
    return <div>No countries found</div>;
  } else if (countriesFiltered.length === 1) {
    return <CountryView country={countriesFiltered[0]} />;
  } else if (countriesFiltered.length > 10) {
    return <p>Too many matches, be more specific!</p>;
  } else {
    const countriesList = countriesFiltered.map((country, index) => {
      return (
        <div key={country.name.common + index}>
          <li>
            {country.name.common}
            <button onClick={showCountry(country)}>show</button>
            {/* decide which one to show or not */}
            {shownCountry === country ? (
              <CountryView country={country} />
            ) : null}
          </li>
        </div>
      );
    });
    return <ul>{countriesList}</ul>;
  }
};

export default Countries;
