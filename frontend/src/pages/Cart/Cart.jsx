import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/Cart/CartItem";
import StripeCheckout from "react-stripe-checkout";
import { checkOut } from "../../redux/callAPI";
import { resetCart } from "../../redux/cartSlice";
import number from "../../utils/number";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { quantity } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const KEY = process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    stripeToken &&
      dispatch(checkOut({ tokenId: stripeToken.id, amount: cart.total }));
  }, [dispatch, stripeToken, cart.total]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReset = () => {
    dispatch(resetCart());
  };
  return (
    <>
      <Header />
      <Helmet title="Giỏ hàng">
        <div className="cart d-flex align-items-center justify-content-center">
          <div className="cart__list">
            <CartItem cart={cart} />
          </div>
          <div className="cart__info ml-5 w-25">
            <div className="car__info__text">
              <p>
                Số đơn hàng trong giỏ hàng: <b>{quantity}</b>
              </p>
              <div className="car__info__text__price">
                <span>
                  Thành tiền: <b>{number(total)}</b> VND
                </span>
              </div>
            </div>
            <div className="cart__info__btn">
              <StripeCheckout
                name="FlashShop"
                image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d77ac359949097.5a357be8594ab.jpg"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="w-100 p-2 bg-blue color-white border-0">
                  Đặt hàng
                </button>
              </StripeCheckout>
              <Link to="/">
                <button className="w-100 color-black p-2 border-0 mt-2">
                  Tiếp tục mua hàng
                </button>
              </Link>
              <button
                className="w-100 color-black p-2 border-0 mt-2"
                onClick={handleReset}
              >
                Reset giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Cart;
