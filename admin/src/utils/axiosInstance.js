import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const stripeInstance = axios.create({
  baseURL: "https://api.stripe.com",
  headers: { Authorization: `Bearer ${KEY}` },
});
