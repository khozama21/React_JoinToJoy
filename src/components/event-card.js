import React from "react";

import PropTypes from "prop-types";

import "./event-card.css";

const EventCard = (props) => {
  return (
    <div className="event-card-event-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="event-card-image"
      />
      <div className="event-card-vertical-line"></div>
      <div className="event-card-container">
        <span className="event-card-title">{props.title}</span>
        <span className="event-card-text">{props.text}</span>
      </div>
    </div>
  );
};

EventCard.defaultProps = {
  title: "Inbound Marketing Secrets",
  image_alt: "image",
  text: "they are amazing team with amazing designers iam vary happy to choose them in my party",
  image_src:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200",
};

EventCard.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
};

export default EventCard;
