import React, { useState } from "react";
import Forecast from "./Forecast";
import Venues from "./Venues";
import Main from "./main";
import Display from "./Display";
import "./style.css";

const App = () => {
  const [venues, setVenues] = useState([]);
  const [forecast, setForecast] = useState({});

  const executeSearch = async (city) => {
    const ven = city && (await Main.getVenues(city));
    setVenues(ven);
    const forecast = city && (await Main.getForecast(city));
    setForecast(forecast);
  };

  return (
    <>
      <Display executeSearch={executeSearch} />
      <div className="container">
        {forecast && Object.entries(forecast).length > 0 && (
          <Forecast forecast={forecast} />
        )}
        {venues && venues.length > 0 && <Venues venues={venues} />}
      </div>
    </>
  );
};

export default App;
