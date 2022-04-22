import React from "react";
import Chart from "../../components/chart/Chart";
import Features from "../../components/Features/Features";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";

const Home = ({ currentUser, users, products, accessories, orders, sum }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar currentUser={currentUser} />
        <div className="widgets">
          <Widget type="users" user={users} up={true} />
          <Widget type="products" product={products} up={false} />
          <Widget type="accessories" up={true} accessory={accessories} />
          <Widget type="orders" order={orders} up={false} />
        </div>
        <div className="charts">
          <Features sum={sum} />
          <Chart allData={orders} title={"Last 10 Months"} aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
