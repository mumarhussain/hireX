import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const token = req.cookies.token;
  console.log(req.cookies, token, "---------<<< tokem");

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
