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

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "10s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "15s" }
  );
};

userRouter.post("/login", async (req, res) => {
  const cookies = req.cookies;
  console.log("cookies: " + JSON.stringify(cookies));

  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).exec();
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const accessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);
        let newRefreshTokenArray = !cookies?.refresh
          ? user.refreshToken
          : user.refreshToken.filter((refresh) => refresh !== cookies.refresh);

        if (cookies?.refresh) {
          const refreshToken = cookies.refresh;
          const foundToken = await User.findOne({ refreshToken }).exec();

          // Detected refresh token

          if (!foundToken) {
            // Clear previous refresh token
            newRefreshTokenArray = [];
          }
          res.clearCookie("refresh", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          });
        }
        // Save refresh token with current user
        user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await user.save();
        console.log(result);
        res.cookie("refresh", newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
          auth: true,
          accessToken: accessToken,
          // refreshToken: newRefreshToken,
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

userRouter.post("/refresh", async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.refresh) return res.status(401);
  const refreshToken = cookies.refresh;
  // if (!refreshToken) return res.status(401).json("You are not authenticated!");
  res.clearCookie("refresh", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  const foundUser = await User.findOne({ refreshToken }).exec();

  // Detected refreshToken
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      async (err, user) => {
        err && console.log(err);
        const hackedUser = await User.findOne({
          username: user.username,
        }).exec();
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();
        console.log(result);
      }
    );
    return res.status(403).json("Refresh token is not valid!");
  }
  const newRefreshTokenArray = foundUser.refreshToken.filter(
    (refresh) => refresh !== refreshToken
  );

  jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET,
    async (err, user) => {
      if (err) {
        console.log("expired refresh token");
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save();
        console.log(result);
      }
      if (err || foundUser.username !== user.username) return res.status(403);

      // Refresh token was still valid
      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);
      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundUser.save();
      console.log(result);

      res.cookie("refresh", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json(newAccessToken);
    }
  );
  // if (!refreshTokens.includes(refreshToken))

  // jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
  //   err && console.log(err);
  //   refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

  //   const newAccessToken = generateAccessToken(user);
  //   const newRefreshToken = generateRefreshToken(user);

  //   refreshTokens.push(newRefreshToken);
  //   res
  //     .status(200)
  //     .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  // });
});

userRouter.post("/logout", async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refresh) return res.status(204);
  const refreshToken = cookies.refresh;

  // refresh token in DB
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("refresh", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.status(204);
  }

  // Delete token in DB
  foundUser.refreshToken = foundUser.refreshToken.filter(
    (refresh) => refresh !== refreshToken
  );
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie("refresh", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.status(204);
});

export { userRouter };
