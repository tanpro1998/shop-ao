import express from "express";
const authRouter = express.Router();

import {
  login,
  logout,
  refresh,
  register,
} from "../controllers/authController.js";

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/refresh", refresh);

authRouter.post("/logout", logout);

export default authRouter;
