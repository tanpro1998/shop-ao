import axios from "axios";
import jsCookie from "js-cookie";

const BASE_URL = "http://localhost:5000/api";
const KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;
const ACCESS_TOKEN = jsCookie.get("access");
const REFRESH_TOKEN = jsCookie.get("refresh");

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosToken = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${ACCESS_TOKEN}` },
});

export const stripeInstance = axios.create({
  baseURL: "https://api.stripe.com",
  headers: { Authorization: `Bearer ${KEY}` },
});
