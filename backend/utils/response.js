export const sendSuccess = (
  res,
  message = "Success",
  data = null,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(data && { data }),
  });
};

export const sendCreated = (
  res,
  message = "Resource created successfully",
  data = null
) => {
  return res.status(201).json({
    success: true,
    message,
    ...(data && { data }),
  });
};

export const sendBadRequest = (res, message = "Bad Request", data = null) => {
  return res.status(400).json({
    success: false,
    message,
    ...(data && { data }),
  });
};

export const sendUnauthorized = (res, message = "Unauthorized access") => {
  return res.status(401).json({
    success: false,
    message,
  });
};

export const sendForbidden = (res, message = "Forbidden access") => {
  return res.status(403).json({
    success: false,
    message,
  });
};

export const sendNotFound = (res, message = "Resource not found") => {
  return res.status(404).json({
    success: false,
    message,
  });
};

export const sendServerError = (res, message = "Internal Server Error") => {
  return res.status(500).json({
    success: false,
    message,
  });
};
