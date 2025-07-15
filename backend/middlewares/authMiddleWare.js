import jwt from "jsonwebtoken";
import { User } from "../models/usersModel.js";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  console.log("id---->", req.userId);
  if (!token)
    return res.status(401).json({ message: "Unauthorized – no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const checkRole = (req, res, next) => {
  const { role } = req.body;
  try {
    const fetchUser = User.find;
  } catch (error) {}
};
