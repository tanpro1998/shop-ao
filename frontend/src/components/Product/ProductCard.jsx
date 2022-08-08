import React from "react";
import number from "../../utils/number";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.image01} alt="" />
          <img src={props.image02} alt="" />
        </div>
        <div className="product-card__name">{props.name}</div>
        <div className="product-card__price">{number(props.price)}</div>
      </Link>
      <div className="product-card__btn">
        <Link to={`/product/${props.id}`}>
          <Button size="sm" icon="bx bx-cart" animate={true}>
            Mua
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
