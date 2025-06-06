import { User } from "../models/usersModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecertKey = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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
    });
    await newUser.save();
    res.status(201).json({
      message: "User created Successfully",
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
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
    console.log(email, password);
    
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user?._id }, jwtSecertKey, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "User Logged In successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login error:", error);
    res
      .status(500)
      .json({ message: "A server error occurr while logging in user" });
  }
};
