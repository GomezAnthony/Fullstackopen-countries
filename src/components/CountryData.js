import React from "react";

const CountryData = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(lang => 
            <li key={lang}>{lang}</li>
          )}
      </ul>
      <img
        src={country.flag}
        alt={`${country.name.common}'s flag`}
        style={{ width: "100px" }}
      />

    </div>
  );
};

export default CountryData;