import React from "react";
import "./style.css";

export const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const createVenueHTML = (name, location, iconSource, index) => {
  return (
    <div key={index} className="venue">
      <h2>{name}</h2>
      <img className="venueimage" src={iconSource} alt={name} />
      <h3>Address:</h3>
      <p>{location.address}</p>
      <p>{location.city}</p>
      <p>{location.country}</p>
    </div>
  );
};

export const createWeatherHTML = (currentDay) => {
  return (
    <>
      <h2>{weekDays[new Date().getDay()]}</h2>
      <h2>Temperature: {kelvinToCelcius(currentDay.main.temp)}&deg;C</h2>
      <h2>Condition: {currentDay.weather[0].description}</h2>
      <h2>Wind: {currentDay.wind.speed} Km/hr</h2>
      <img
        src={`https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`}
        alt={currentDay.name}
      />
    </>
  );
};

const kelvinToCelcius = (k) => (k - 273.15).toFixed(0);
