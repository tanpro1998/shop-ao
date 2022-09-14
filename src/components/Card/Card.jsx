import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="card__info">
        <div className="card__info__name">{props.name}</div>
        <div className="card__info__desc">{props.desc}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Card;
