import express from "express";
import userRoutes from "./routes/user.js";
import locationRoutes from "./routes/location.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";

export const app = express();

config({
  path: "./database/config.env",
});
//using middlewares

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//using routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/location", locationRoutes);

app.get("/", (req, res) => {
  res.send("Nice working");
});
app.use((err, req, res, next) => {});
