import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/table/Table";
import "./list.scss";

const List = ({ currentUser, orders }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <Table orders={orders} />
      </div>
    </div>
  );
};

export default List;
