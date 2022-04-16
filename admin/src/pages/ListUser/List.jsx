import React, { useEffect, useState } from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TableData from "../../components/TableData/TableData";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/callAPI";

const List = ({ currentUser }) => {
  const { users } = useSelector((state) => state.users);

  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setAllUsers(users);
  }, [users]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <TableData type="users" user={allUsers} />
      </div>
    </div>
  );
};

export default List;
