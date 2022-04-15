import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./tableData.scss";
import { Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { deleteProduct, deleteAccessory } from "../../redux/callAPI";
const TableData = ({ user, product, type }) => {
  const dispatch = useDispatch();

  const UserColumns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "username",
      headerName: "User",
      width: 300,
    },

    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  const ProductColumns = [
    { field: "_id", headerName: "ID", width: 400 },
    {
      field: "title",
      headerName: "Product",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="cellImage">
            <img src={params.row.image01} alt="" />
            <div>{params.row.title}</div>
          </div>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => [
                dispatch(deleteProduct({ productId: params.row._id })),
                dispatch(deleteAccessory({ accessoryId: params.row._id })),
              ]}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="tableData">
      <div className="tableData__title">
        {type === "users" ? "Add New User" : "Add New Product"}
        <Link to="#" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        columns={type === "users" ? UserColumns : ProductColumns}
        rows={type === "users" ? user : product}
        checkboxSelection
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default TableData;
