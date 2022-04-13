import React, { useEffect, useState } from "react";
import Chart from "../../components/chart/Chart";
import Features from "../../components/Features/Features";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/callAPI";

const Home = () => {
  const { users } = useSelector((state) => state.users);
  const [totalUsers, setTotalUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setTotalUsers(users);
  }, [users]);

  console.log(totalUsers);
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" users={totalUsers} />
          <Widget type="products" />
          <Widget type="orders" />
          <Widget type="earns" />
        </div>
        <div className="charts">
          <Features />
          <Chart title={"Last 6 Months"} aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
