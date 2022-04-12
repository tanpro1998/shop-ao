import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyToken } from "./verifyToken.js";
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, username, password, cfpassword } = req.body;
  if (password !== cfpassword)
    return res.status(400).json({ err: "Password does'nt mach" });
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, username, password: hashPassword });
    await newUser.save();
    res.status(200).json("Register Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "5s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_REFRESH_SECRET
  );
};

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.status(200).json({
          auth: true,
          accessToken: accessToken,
          refreshToken: refreshToken,
          ...user._doc,
        });
      } else {
        res.status(400).json({ auth: false, error: "Wrong password" });
      }
    } else {
      res.status(401).json({ auth: false, error: "User does not exist" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

userRouter.post("/refresh", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json("Refresh token is not valid!");

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);
    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
});

userRouter.post("/logout", verifyToken, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("Logged out Success!");
});

export { userRouter };
