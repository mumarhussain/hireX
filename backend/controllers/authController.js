import { User } from "../models/usersModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecertKey = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
    });
    await newUser.save();
    res.status(201).json({
      message: "User created Successfully",
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    console.log("Error occurr while creating new user", error);
    res.status(500).json({
      message: "A server error occurr while creating new user",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "User Logged In successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res
      .status(500)
      .json({ message: "A server error occurred while logging in" });
  }
};