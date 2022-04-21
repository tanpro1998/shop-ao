import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Row, Col } from "antd";
import Header from "../../components/Header/Header";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../../redux/cartSlice";
import number from "../../utils/number";

const Product = ({ allProducts }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

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
    setProduct(allProducts.find((item) => item._id === productId));
  }, [allProducts, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    if (check()) {
      dispatch(addItemToCart({ ...product, quantity, size, color }));
    }
  };

  return (
    <div>
      <Header />
      <Helmet title="Product">
        {allProducts.length > 0 && (
          <Row className="">
            <Col lg={12} sm={24}>
              <div className="products__image ">
                <img src={product.image01} alt="" />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div className="products pt-5">
                <div className="products__title">
                  <h1>{product.title}</h1>
                </div>
                <div className="products__item">
                  <div className="products__item__title">Màu Sắc:</div>
                  <div className="products__item__list">
                    {product.colors?.map((item) => (
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
                    {product.sizes?.map((item) => (
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
                    {number(product.price)} VNĐ
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

export default Product;
