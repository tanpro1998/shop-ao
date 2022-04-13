import React from "react";
import {
  CodepenOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Widget = ({ type, users }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: (
          <UserOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "darkblue" }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View all products",
        query: "products",
        icon: (
          <CodepenOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        query: "orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "yellow" }}
          />
        ),
      };
      break;
    case "earns":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnings",
        query: "earns",
        icon: (
          <MoneyCollectOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "teal" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="widget__left">
        <span className="widget__left__title">{data.title}</span>
        <span className="widget__left__counter">
          {data.isMoney && "$"}
          {users?.length}
        </span>
        <span className="widget__left__link">{data.link}</span>
      </div>
      <div className="widget__right">
        <div className="widget__right__percent">
          <UpOutlined />
          30%
        </div>
        <div className="widget__right__icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
