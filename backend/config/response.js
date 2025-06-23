export const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
};

export const MESSAGES = {
  USER_CREATED: "User created successfully",
  USER_NOT_FOUND: "User not found",
  INVALID_CREDENTIALS: "Invalid credentials",
  EMAIL_ALREADY_REGISTERED: "Email already registered",
  LOGGED_IN: "User logged in successfully",
  LOGGED_OUT: "Logged out successfully",
  SERVER_ERROR: "A server error occurred",
};

export function sendSuccess(
  res,
  { status = HTTP_STATUS.OK, message, data } = {}
) {
  return res.status(status).json({ message, ...(data ? { data } : {}) });
}

export function sendError(
  res,
  { status = HTTP_STATUS.INTERNAL_ERROR, message } = {}
) {
  return res.status(status).json({ message });
}
