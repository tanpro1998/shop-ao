import express from "express";
const stripeRouter = express.Router();
import { stripePayment } from "../controllers/stripeController.js";

stripeRouter.post("/payment", stripePayment);

export default stripeRouter;
