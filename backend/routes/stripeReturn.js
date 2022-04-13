import express from "express";
import Stripe from "stripe";
const KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(`${KEY}`);
const stripeRTRouter = express();

stripeRTRouter.get("/v1/charges", async (req, res) => {
  const orderReturns = await stripe.charges.list({ limit: 20 });
  res.send(orderReturns);
});

export { stripeRTRouter };
