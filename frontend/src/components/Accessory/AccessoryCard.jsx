import React from "react";
import number from "../../utils/number";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const AccessoryCard = (props) => {
  return (
    <div className="accessory-card">
      <Link to={`/${props.slug}`}>
        <div className="accessory-card__image">
          <img src={props.image01} alt="" />
          <img src={props.image02} alt="" />
        </div>
        <div className="accessory-card__name">{props.name}</div>
        <div className="accessory-card__price">{number(props.price)}</div>
      </Link>
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

export default AccessoryCard;
