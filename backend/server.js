import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./connectDB.js";
import { userRouter } from "./routes/userRoute.js";
import { productRouter } from "./routes/productRoute.js";
import { cartRouter } from "./routes/cartRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { stripeRouter } from "./routes/stripe.js";
import { accessoriesRouter } from "./routes/accessoriesRoute.js"
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/accessories", accessoriesRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running");
//   });
// }

app.get("/", (req, res) => {
  res.send("APP is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
