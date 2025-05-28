require("dotenv").config();

import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";

const server = express();

mongoose.connect(process.env.mongo_url!).then(() => {
  console.log("MongoDB connected successfully!");
});

server.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});

server.get("/products", (req: Request, res: Response) => {
  res.send("We will get products here...");
});

server.listen(8000, () => {
  console.log("Server is started");
});
