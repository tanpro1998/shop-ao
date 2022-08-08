import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import number from "../../utils/number";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const ProductViewItem = ({ product }) => {
  const [descExpand, setDescExpand] = useState(false);
  const [previewImg, setPreviewImg] = useState(product?.image01);

  if (product === undefined)
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);
  return (
    <div className="product-view">
      <Link to="/">
        <Button size="sm">
          <div className="product-view__home">
            <LeftOutlined /> Quay lại
          </div>
        </Button>
      </Link>
      <div className="product-view__images">
        <div className="product-view__images__list">
          <div
            className="product-view__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product-view__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product-view__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-desc mobile ${descExpand ? "expand" : ""}`}>
          <div className="product-desc__title">Chi tiết sản phẩm</div>
          <div
            className="product-desc__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-desc__toggle">
            <Button size="sm" onClick={() => setDescExpand(!descExpand)}>
              {descExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product-view__info">
        <h1 className="product-view__info__title">{product.title}</h1>
        <div className="product-view__info__item">
          <span className="product-view__info__item__price">
            {number(product.price)}
          </span>
        </div>
        <div className="product-view__info__item">
          <div className="product-view__info__item__title">Màu sắc</div>
          <div className="product-view__info__item__list">
            {product.colors?.map((item, index) => (
              <div
                key={index}
                className={`bg-${item} product-view__info__item__list__item  `}
              ></div>
            ))}
          </div>
        </div>
        <div className="product-view__info__item">
          <div className="product-view__info__item__title">Kích cỡ</div>
          <div className="product-view__info__item__list">
            {product.sizes?.map((item, index) => (
              <div key={index} className="product-view__info__item__list__item">
                <span className="product-view__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product-view__info__item">
          <Link to={`/product/${product._id}`}>
            <Button size="sm">Mua</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductViewItem.propTypes = {
  product: PropTypes.object,
};

export default ProductViewItem;
