import express from "express";
import { requireAuth } from "../middlewares/authMiddleWare.js";
import { requireRole } from "../middlewares/checkRoleMiddleware.js";

const freelancerRouter = express.Router();

freelancerRouter.use(requireAuth, requireRole("freelancer"));

freelancerRouter.get("/freelancer/dashboard", (req, res) => {
  res.json({ message: `Hello Freelancer ${req.userId}` });
});

export default freelancerRouter;
