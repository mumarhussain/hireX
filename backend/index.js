import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRouter.js";
import clientRouter from "./routes/clientRoutes.js";
import freelancerRouter from "./routes/freelancerRouter.js";
dotenv.config();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDb successfully");
    app.listen(PORT, () => {
      console.log("Server is running on port ", process.env.PORT);
    });
  })
  .catch(() => {
    console.log("Error occur while connection to DB");
  });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRouter);
app.use(clientRouter);
app.use(freelancerRouter);
