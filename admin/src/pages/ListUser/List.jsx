import React from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TableData from "../../components/TableData/TableData";

const List = ({ currentUser, type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <TableData type="users" />
      </div>
    </div>
  );
};

export default List;
