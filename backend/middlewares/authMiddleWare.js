import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization || ""; // e.g. "Bearer TOKEN"
  const token = auth.split(" ")[1];
  // const token = req.cookies.token;
  console.log(token, "---------<<< tokennss");

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(process.env.JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
