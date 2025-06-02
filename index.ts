require("dotenv").config();

import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import productsModel from "./models/products.model";
import productRouter from "./modules/products/products.routes";

const server = express();

server.use(express.json());

mongoose.connect(process.env.mongo_url!).then(() => {
  console.log("MongoDB connected successfully!");
});

server.use("/products", productRouter);

server.listen(8000, () => {
  console.log("Server is started");
});
