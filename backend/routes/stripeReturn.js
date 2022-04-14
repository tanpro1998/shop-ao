import express from "express";
const stripeRTRouter = express.Router();
import Stripe from "stripe";
const KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(`${KEY}`);

stripeRTRouter.get("/v1/charges", async (req, res) => {
  const orderReturns = await stripe.charges.list({ limit: 20 });
  res.send(orderReturns);
});

export { stripeRTRouter };
