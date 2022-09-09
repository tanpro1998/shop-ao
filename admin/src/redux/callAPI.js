import {
  axiosPublic,
  stripeInstance,
  axiosPrivate,
} from "../utils/axiosInstance";
import { getAllUser } from "./userSlice";
import { getAllProduct } from "./productSlice";
import { getAllAccessory } from "./accessorySlice";
import { getAllOrder } from "./orderSlice";
import { message } from "antd";
import { login, logout } from "./authSlice";
import jsCookie from "js-cookie";

export const getAllUsers = async (dispatch) => {
  try {
    const res = await axiosPublic.get("/users");
    dispatch(getAllUser(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editRole = async (reqObj) => {
  try {
    await axiosPrivate.post("/users/editrole", reqObj);
    message.success("Edit Role Success");
    setTimeout(() => {
      window.location.href = "/users";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const deleteUser = async (reqObj) => {
  try {
    await axiosPrivate.post("/users/delete", reqObj);
    message.success("Delete User Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};
export const getAllProducts = async (dispatch) => {
  try {
    const res = await axiosPublic.get("/products");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editProduct = async (reqObj) => {
  try {
    await axiosPrivate.post("/products/update", reqObj);
    message.success("Update Product Success");
    setTimeout(() => {
      window.location.href = "/products";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const addProduct = async (reqObj) => {
  try {
    await axiosPrivate.post("/products/add", reqObj);
    message.success("Add Product Success");
    setTimeout(() => {
      window.location.href = "/products";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin!");
  }
};

export const deleteProduct = async (reqObj) => {
  try {
    await axiosPrivate.post("/products/delete", reqObj);
    message.success("Delete Product Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const getAllAccessories = async (dispatch) => {
  try {
    const res = await axiosPublic.get("/accessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editAccessory = async (reqObj) => {
  try {
    await axiosPrivate.post("/accessories/update", reqObj);
    message.success("Update Accessory Success");
    setTimeout(() => {
      window.location.href = "/accessories";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const addAccessory = async (reqObj) => {
  try {
    await axiosPrivate.post("/accessories/add", reqObj);
    message.success("Add Accessory Success");
    setTimeout(() => {
      window.location.href = "/accessories";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin!");
  }
};

export const deleteAccessory = async (reqObj) => {
  try {
    await axiosPrivate.post("/accessories/delete", reqObj);
    message.success("Delete Accessory Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
export const getAllOrders = async (dispatch) => {
  try {
    const res = await stripeInstance.get("/v1/charges");
    dispatch(getAllOrder(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = async (reqObj, dispatch) => {
  try {
    const res = await axiosPublic.post("/auth/login", reqObj, {
      withCredentials: true,
    });
    dispatch(login(res.data));
    localStorage.setItem("admin", JSON.stringify(res.data));
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Wrong username or password");
  }
};

export const adminLogout = async (dispatch, navigate) => {
  try {
    dispatch(logout());
    localStorage.removeItem("admin");
    jsCookie.remove("access");
    jsCookie.remove("refresh");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (error) {
    console.log(error);
  }
};
