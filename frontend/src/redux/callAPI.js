import axios from "axios";
import { message } from "antd";

import { getAllAccessory } from "./accessoriesSlice";
import { getAllProduct } from "./productSlice";

import { publicRequest } from "../utils/axiosInstance";
import jsCookie from "js-cookie";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await publicRequest.get("/products/getallproducts");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllAccessories = () => async (dispatch) => {
  try {
    const res = await publicRequest.get("/accessories/getallaccessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
  }
};

//

export const userRegister = (reqObj) => async (dispatch) => {
  try {
    await publicRequest.post("/users/register", reqObj);
    message.success("Register Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = (reqObj) => async (dispatch) => {
  try {
    const res = await publicRequest.post("/users/login", reqObj);

    localStorage.setItem("user", JSON.stringify(res.data));
    jsCookie.set("access", res.data.accessToken);
    jsCookie.set("refresh", res.data.refreshToken);
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Wrong username or password");
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await publicRequest.post("/users/logout");
    message.success("Logout Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const checkOut = (reqObj) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/api/checkout/payment", reqObj);
    message.success("Checkout Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
