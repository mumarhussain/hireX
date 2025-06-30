import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { requireAuth } from "../middlewares/authMiddleWare.js";
import { User } from "../models/usersModel.js";

export const authRouter = express.Router();

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

authRouter.get("/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  console.log("🚀 ~ authRouter.get ~ user:", user);
  res.json({ user });
});

authRouter.post("/logout", (_req, res) => {
  res.json({ message: "Logged out" });
});
