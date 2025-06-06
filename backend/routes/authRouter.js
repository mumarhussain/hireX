import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);
