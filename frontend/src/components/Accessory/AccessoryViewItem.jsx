import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import number from "../../utils/number";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const AccessoryViewItem = ({ accessory }) => {
  const [descExpand, setDescExpand] = useState(false);
  const [previewImg, setPreviewImg] = useState(accessory.image01);

  if (accessory === undefined)
    accessory = {
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
    setPreviewImg(accessory.image01);
  }, [accessory]);
  return (
    <div className="product-view">
      <Link to="/accessories">
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
            onClick={() => setPreviewImg(accessory.image01)}
          >
            <img src={accessory.image01} alt="" />
          </div>
          <div
            className="product-view__images__list__item"
            onClick={() => setPreviewImg(accessory.image02)}
          >
            <img src={accessory.image02} alt="" />
          </div>
        </div>
        <div className="product-view__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-desc mobile ${descExpand ? "expand" : ""}`}>
          <div className="product-desc__title">Chi tiết sản phẩm</div>
          <div
            className="product-desc__content"
            dangerouslySetInnerHTML={{ __html: accessory.desc }}
          ></div>
          <div className="product-desc__toggle">
            <Button size="sm" onClick={() => setDescExpand(!descExpand)}>
              {descExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product-view__info">
        <h1 className="product-view__info__title">{accessory.title}</h1>
        <div className="product-view__info__item">
          {/* <div className="product-view__info__item__title">Đơn giá</div> */}

          <span className="product-view__info__item__price">
            {number(accessory.price)}
          </span>
        </div>
        <div className="product-view__info__item">
          <div className="product-view__info__item__title">Màu sắc</div>
          <div className="product-view__info__item__list">
            {accessory.colors?.map((item, index) => (
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
            {accessory.sizes?.map((item, index) => (
              <div key={index} className="product-view__info__item__list__item">
                <span className="product-view__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product-view__info__item">
          <Link to={`/accessory/${accessory._id}`}>
            <Button size="sm">Mua</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AccessoryViewItem.propTypes = {
  accessory: PropTypes.object,
};

export default AccessoryViewItem;
