import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleOnChange = (event) => {
    let country = event.target.value;
    setCountryName(country);
  };

  return (
    <div className="App">
      <div>
        find countries:
        <input type="text" value={countryName} onChange={handleOnChange} />
      </div>
      <Countries countries={countries} countryName={countryName} />
    </div>
  );
}

export default App;
