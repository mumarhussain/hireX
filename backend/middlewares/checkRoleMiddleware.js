export function requireRole(expectedRole) {
  return (req, res, next) => {
    if (req.userRole !== expectedRole) {
      return res.status(403).json({ message: "Forbidden – insufficient role" });
    }
    next();
  };
}
