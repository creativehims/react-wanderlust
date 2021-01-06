import React from "react";
import "./style.css";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const kelvinToCelcius = (k) => (k - 273.15).toFixed(0);

const ForecastInfo = (props) => {
  const { currentDay } = props;
  return (
    <div className="weather" id="weather1">
      <h2>{weekDays[new Date().getDay()]}</h2>
      <h2>Temperature: {kelvinToCelcius(currentDay.main.temp)}&deg;C</h2>
      <h2>Condition: {currentDay.weather[0].description}</h2>
      <h2>Wind: {currentDay.wind.speed} Km/hr</h2>
      <img
        src={`https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`}
        alt={currentDay.name}
      />
    </div>
  );
};

export default ForecastInfo;
