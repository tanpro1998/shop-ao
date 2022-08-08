import React from "react";
import {
  MoreOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import number from "../../utils/number";

const Features = ({ sum }) => {
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
        <p className="features__bottom__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          consectetur reprehenderit magni ab eos illo maiores animi aliquam
          mollitia odit!
        </p>
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
              Last Week
            </div>
            <div className="features__bottom__summary__item__result">
              <ArrowUpOutlined className="up" />
              <div className="number">{number(400000)}</div>
            </div>
          </div>
          <div className="features__bottom__summary__item">
            <div className="features__bottom__summary__item__title">
              Last Month
            </div>
            <div className="features__bottom__summary__item__result">
              <ArrowUpOutlined className="up" />
              <div className="number">{number(1000000)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
