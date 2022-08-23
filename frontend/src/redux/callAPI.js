import axios from "axios";
import { message } from "antd";

import { getAllAccessory } from "./accessoriesSlice";
import { getAllProduct } from "./productSlice";

import { publicRequest } from "../utils/axiosInstance";
import jsCookie from "js-cookie";

export const getAllProducts = async (dispatch) => {
  try {
    const res = await publicRequest.get("/products");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllAccessories = async (dispatch) => {
  try {
    const res = await publicRequest.get("/accessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const userRegister = async (reqObj, navigate) => {
  try {
    await publicRequest.post("/auth/register", reqObj);
    message.success("Đăng kí thành công!");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
  }
};

export const userLogin = async (reqObj) => {
  try {
    const res = await publicRequest.post("/auth/login", reqObj);

    localStorage.setItem("user", JSON.stringify(res.data));
    jsCookie.set("access", res.data.accessToken);
    message.success("Đăng nhập thành công");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
  }
};

export const userLogout = async () => {
  try {
    await publicRequest.post("/auth/logout");
    localStorage.clear();
    jsCookie.remove("access");
    message.success("Đăng xuất thành công!");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
  }
};

export const checkOut = async (reqObj) => {
  try {
    await axios.post("http://localhost:5000/api/checkout/payment", reqObj);
    message.success("Thanh toán đơn hàng thành công!");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
  }
};
