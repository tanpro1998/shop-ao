import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Row, Col } from "antd";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../../redux/cartSlice";
import number from "../../utils/number";

const Accessory = () => {
  const { accessories } = useSelector((state) => state.accessories);
  const { accessoryId } = useParams();
  const dispatch = useDispatch();

  const [accessory, setAccessory] = useState({});

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const check = () => {
    if (color === "") {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (size === "") {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    if (quantity < 1) {
      alert("Số lượng phải lớn hơn 0!");
    }
    return true;
  };

  useEffect(() => {
    setAccessory(accessories.find((item) => item._id === accessoryId));
  }, [accessories, accessoryId]);

  const handleClick = () => {
    if (check()) {
      dispatch(addItemToCart({ ...accessory, quantity, size, color }));
    }
  };
  return (
    <div>
      <Header />
      <Helmet title="Product">
        {accessories.length > 0 && (
          <Row className="d-flex align-items-center">
            <Col lg={12} sm={24}>
              <div className="products__image p-5">
                <img src={accessory.image01} alt="" />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className="products p-5">
                <h1 className="products__title text-center">
                  {accessory.title}
                </h1>
                <div className="products__item">
                  <div className="products__item__title">Màu Sắc:</div>
                  <div className="products__item__list">
                    {accessory.colors?.map((item) => (
                      <div
                        key={item}
                        className={`bg-${item} products__item__list__item ${
                          color === item ? "active" : ""
                        }
                  }`}
                        onClick={() => setColor(item)}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="products__item">
                  <div className="products__item__title">Cỡ Size :</div>
                  <div className="products__item__list">
                    {accessory.sizes?.map((item) => (
                      <div
                        key={item}
                        className={`products__item__list__item ${
                          size === item ? "active" : ""
                        }`}
                        onClick={() => setSize(item)}
                      >
                        <span className="products__item__list__item__size">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" products__item">
                  <div className="products__item__title">Đơn giá:</div>
                  <p className="products__item__price">
                    {number(accessory.price)} VNĐ
                  </p>
                </div>
                <div className=" products__item">
                  <div className="products__item__title">Số lượng:</div>
                  <input
                    type="number"
                    min={1}
                    className="products__item__input"
                    onChange={(e) => setQuantity(e.target.value)}
                    defaultValue={1}
                  />
                </div>
                <div className="products__item">
                  <button
                    className="p-3 border-0 bg-blue color-white w-100"
                    onClick={handleClick}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Helmet>
    </div>
  );
};

export default Accessory;
