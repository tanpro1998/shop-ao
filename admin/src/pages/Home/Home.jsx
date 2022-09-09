import React from "react";
import Chart from "../../components/chart/Chart";
import Features from "../../components/Features/Features";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" up={true} />
          <Widget type="products" up={false} />
          <Widget type="accessories" up={true} />
          <Widget type="orders" up={false} />
        </div>
        <div className="charts">
          <Features />
          <Chart title={"Last 10 Months"} aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
