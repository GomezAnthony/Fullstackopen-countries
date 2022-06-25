import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from './components/Filter'
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const setFilterUsingButton = e => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <CountryList
        countries={countries}
        newFilter={newFilter}
        setFilterUsingButton={setFilterUsingButton}
      />
    </div>
  );
};

export default App;