import React from "react";
import "./style.css";

const Venue = (props) => {
  const { name, location, iconSource, id } = props;
  return (
    <div key={id} className="venue">
      <h2>{name}</h2>
      <img className="venueimage" src={iconSource} alt={name} />
      <h3>Address:</h3>
      <p>{location.address}</p>
      <p>{location.city}</p>
      <p>{location.country}</p>
    </div>
  );
};

export default Venue;
