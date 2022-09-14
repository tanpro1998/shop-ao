import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import number from "../../utils/number";

const Product = (props) => {
  return (
    <div className="product-card">
      <Link to={`/products/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
      </Link>
      <h3 className="product-card__name">{props.name}</h3>
      <div className="product-card__price">{number(props.price)}</div>
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

Product.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Product;
