import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import stripeRouter from "./routes/stripeRoute.js";
import accessoriesRouter from "./routes/accessoriesRoute.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB();

app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/accessories", accessoriesRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

app.get("/", (req, res) => {
  res.send("APP is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
