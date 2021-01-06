import React from "react";
import "./style.css";
import Venue from "./Venue";

const Venues = (props) => {
  const { venues } = props;

  return (
    <>
      <div className="sectiontitle">
        <h2>TOP ATTRACTIONS</h2>
      </div>
      <section id="venues">
        {venues.map((venue, index) => {
          if (index > 4) return null;
          const venueIcon = venue.categories[0].icon;
          const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
          return (
            <Venue
              name={venue.name}
              location={venue.location}
              iconSource={venueImgSrc}
              key={index}
              id={index}
            />
          );
        })}
      </section>
      <footer></footer>
    </>
  );
};

export default Venues;
