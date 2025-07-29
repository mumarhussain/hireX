import express from "express";
import { requireAuth } from "../middlewares/authMiddleWare.js";
import { requireRole } from "../middlewares/checkRoleMiddleware.js";
import { postJob } from "../controllers/postJobController.js";

const clientRouter = express.Router();
clientRouter.use(requireAuth, requireRole("client"));

clientRouter.get("/client/dashboard", (req, res) => {
  res.json({ message: `Hello Client ${req.userId}` });
});

clientRouter.post("/client/dashboard/postjob", requireAuth, postJob);

export default clientRouter;
