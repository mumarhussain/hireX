import { User } from "../models/usersModel.js";
import jwt from "jsonwebtoken";
import { sendBadRequest, sendSuccess } from "../utils/response.js";

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (await User.exists({ email })) {
      return sendBadRequest(res, {
        message: "Email already have an account on this email",
      });
    }

    const newUser = await User.create({ name, email, password, role });

    return sendSuccess(res, {
      message: "Signed In Successfully",
      data: {
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return sendError(res, {
      status: STATUS.INTERNAL_ERROR,
      message: MESSAGES.SERVER_ERROR,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 2 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};
