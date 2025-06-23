import { User } from "../models/usersModel.js";
import jwt from "jsonwebtoken";
import {
  STATUS,
  MESSAGES,
  sendError,
  sendSuccess,
} from "../config/response.js";

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (await User.exists({ email })) {
      return sendError(res, {
        status: STATUS.CONFLICT,
        message: MESSAGES.EMAIL_ALREADY_REGISTERED,
      });
    }

    const newUser = await User.create({ name, email, password, role });

    return sendSuccess(res, {
      status: STATUS.CREATED,
      message: MESSAGES.USER_CREATED,
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
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return sendError(res, {
        status: STATUS.BAD_REQUEST,
        message: MESSAGES.USER_NOT_FOUND,
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return sendError(res, {
        status: STATUS.BAD_REQUEST,
        message: MESSAGES.INVALID_CREDENTIALS,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return sendSuccess(res, {
      status: STATUS.OK,
      message: MESSAGES.LOGGED_IN,
      data: {
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return sendError(res, {
      status: STATUS.INTERNAL_ERROR,
      message: MESSAGES.SERVER_ERROR,
    });
  }
};

export const logoutUser = (_req, res) => {
  return sendSuccess(res, {
    status: STATUS.OK,
    message: MESSAGES.LOGGED_OUT,
  });
};
