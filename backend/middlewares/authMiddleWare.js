import jwt from "jsonwebtoken";

// export function requireAuth(req, res, next) {
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   const token = authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized – no token" });
//   }
//   console.log("🚀 ~ requireAuth ~ token:", token);

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(
//       "🚀 ~ requireAuth ~ process.env.JWT_SECRET:",
//       process.env.JWT_SECRET
//     );
//     console.log(payload, "<----------- payload");

//     req.userId = payload.id; // match how you signed it
//     return next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// }

export function requireAuth(req, res, next) {
  console.log("🚀 ~ requireAuth ~ JWT_SECRET:", process.env.JWT_SECRET);
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized – no token" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🚀 ~ requireAuth ~ token:", token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🚀 ~ requireAuth ~ JWT_SECRET:", process.env.JWT_SECRET);
    console.log("🚀 ~ requireAuth ~ payload:", payload);
    req.userId = payload.id;
    return next();
  } catch (err) {
    console.error("🚀 ~ requireAuth ~ verify error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
