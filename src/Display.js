import React, { useState } from "react";
import "./style.css";

const Display = (props) => {
  const [city, setCity] = useState("");
  const { executeSearch } = props;

  const handleChange = ({ target }) => {
    setCity(target.value);
  };

  return (
    <>
      <header>
        <img
          className="logo"
          src="https://content.codecademy.com/courses/intermediate-javascript-requests/wanderlust/logo.svg"
          alt="logo"
        />
      </header>
      <main>
        <h1>Where do you want to land?</h1>
        <input
          type="text"
          id="city"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <button id="button" type="submit" onClick={() => executeSearch(city)}>
          Submit
        </button>
      </main>
    </>
  );
};

export default Display;
