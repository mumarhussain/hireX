import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { requireAuth } from "../middlewares/authMiddleWare.js";
import { User } from "../models/usersModel.js";

export const authRouter = express.Router();

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

authRouter.get("/me", requireAuth, async (req, res) => {
  console.log("/mereq.cookies:", req.userId, req.cookies);
  const user = await User.findById(req.userId).select("-password");
  res.json({ user });
});

authRouter.post("/logout", (req, res) => {
  res
    .cookie("token", "", { maxAge: 0, httpOnly: false, sameSite: "lax" })
    .json({ message: "Logged out" });
});
