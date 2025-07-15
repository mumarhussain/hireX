import express from "express";
import { requireAuth } from "../middlewares/authMiddleWare.js";
import { requireRole } from "../middlewares/checkRoleMiddleware.js";

const clientRouter = express.Router();
clientRouter.use(requireAuth, requireRole("client"));

clientRouter.get("/client/dashboard", (req, res) => {
  res.json({ message: `Hello Client ${req.userId}` });
});

export default clientRouter;
