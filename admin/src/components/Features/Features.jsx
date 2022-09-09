import React from "react";
import {
  MoreOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import number from "../../utils/number";
import { useSelector } from "react-redux";

const Features = () => {
  const { orders } = useSelector((state) => state.orders);
  const resultOrders = orders.data;
  const firstOrder = resultOrders !== undefined && resultOrders[0];
  const lastOrder =
    resultOrders !== undefined && resultOrders[resultOrders.length - 1];
  let sum = 0;
  for (let i = 0; i < resultOrders?.length; i++) {
    sum += resultOrders[i].amount;
  }

  return (
    <div className="features">
      <div className="features__top">
        <h1>Total Revenue</h1>
        <MoreOutlined />
      </div>
      <div className="features__bottom">
        <div className="features__bottom__circle">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={5} />
        </div>
        <p className="features__bottom__title">Total sales</p>
        <p className="features__bottom__amount">{number(sum)} VND</p>
        <div className="features__bottom__summary">
          <div className="features__bottom__summary__item">
            <div className="features__bottom__summary__item__title">Target</div>
            <div className="features__bottom__summary__item__result">
              <ArrowDownOutlined className="down" />
              <div className="number">{number(500000)}</div>
            </div>
          </div>
          <div className="features__bottom__summary__item">
            <div className="features__bottom__summary__item__title">
              First Oder
            </div>
            <div className="features__bottom__summary__item__result">
              <ArrowUpOutlined className="up" />
              <div className="number">{number(firstOrder.amount)}</div>
            </div>
          </div>
          <div className="features__bottom__summary__item">
            <div className="features__bottom__summary__item__title">
              Last Order
            </div>
            <div className="features__bottom__summary__item__result">
              <ArrowUpOutlined className="up" />
              <div className="number">{number(lastOrder.amount)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
