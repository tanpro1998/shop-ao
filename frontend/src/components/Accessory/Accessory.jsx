import React from "react";
import { Link } from "react-router-dom";
import number from "../../utils/number";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Accessory = (props) => {
  return (
    <div className="accessory-card">
      <Link to={props.slug}>
        <div className="accessory-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
      </Link>
      <h3 className="accessory-card__name">{props.name}</h3>
      <div className="accessory-card__price">{number(props.price)}</div>
      <div className="accessory-card__btn">
        <Link to={`/accessory/${props.id}`}>
          <Button size="sm" icon="bx bx-cart" animate={true}>
            Mua
          </Button>
        </Link>
      </div>
    </div>
  );
};

Accessory.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Accessory;
