import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./tableData.scss";
import { useSelector } from "react-redux";
import {
  deleteProduct,
  deleteAccessory,
  deleteUser,
} from "../../redux/callAPI";
import number from "../../utils/number";

const TableData = ({ type }) => {
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);

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
      headerName: "Role",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellRole">
            <div>{params.row.isAdmin === true ? "Admin" : "User"}</div>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={type === "users" && `/editrole/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit Role</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                params.row.isAdmin === false &&
                  deleteUser({ userId: params.row._id });
              }}
              style={{
                cursor: params.row.isAdmin === true ? "not-allowed" : "pointer",
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const ProductColumns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "title",
      headerName: "Product",
      width: 300,
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellPrice">
            <div>{number(params.row.price)} VND</div>
          </div>
        );
      },
    },

    {
      field: "createdAt",
      headerName: "Create At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellTime">
            <div>
              {params.row.createdAt.slice(0, 10).split("-").reverse().join("-")}
            </div>
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Update At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellTime">
            <div>
              {params.row.updatedAt.slice(0, 10).split("-").reverse().join("-")}
            </div>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={type === "products" && `/editproduct/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => {
                deleteProduct({ productId: params.row._id });
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const AccessoryColumns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "title",
      headerName: "Accessory",
      width: 300,
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellPrice">
            <div>{number(params.row.price)} VND</div>
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellTime">
            <div>
              {params.row.createdAt.slice(0, 10).split("-").reverse().join("-")}
            </div>
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Update At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellTime">
            <div>
              {params.row.updatedAt.slice(0, 10).split("-").reverse().join("-")}
            </div>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={type === "accessories" && `/editaccessory/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => {
                deleteAccessory({ accessoryId: params.row._id });
              }}
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
        {type === "users"
          ? ""
          : type === "products"
          ? "Add New Product"
          : "Add New Accessory"}
        <Link
          to={type === "products" ? "/addproduct" : "/addaccessory"}
          className="link"
          style={{ display: type === "users" ? "none" : "block" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        columns={
          type === "users"
            ? UserColumns
            : type === "products"
            ? ProductColumns
            : AccessoryColumns
        }
        rows={
          type === "users"
            ? users
            : type === "products"
            ? products
            : accessories
        }
        checkboxSelection
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default TableData;
