import React from "react";
import "./style.css";
import ForecastInfo from "./ForecastInfo";

const Forecast = (props) => {
  const { forecast } = props;
  return (
    <>
      <div id="destination">
        <h2>{forecast.name}</h2>
      </div>
      <div className="sectiontitle">
        <h2>CURRENT WEATHER</h2>
      </div>
      <section id="weather">
        <ForecastInfo currentDay={forecast} />
      </section>
    </>
  );
};

export default Forecast;
