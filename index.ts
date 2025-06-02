require("dotenv").config();

import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import productsModel from "./models/products.model";

const server = express();

server.use(express.json());

mongoose.connect(process.env.mongo_url!).then(() => {
  console.log("MongoDB connected successfully!");
});

server.post("/products", async (req: Request, res: Response) => {
  // desctructuring object...
  const { product_name, product_desc, price, image_url } = req.body;

  try {
    if (!product_name) throw "Product name is required";
    if (!product_desc) throw "Product desc is required!";
    if (!price) throw "price is required!";
    if (!image_url) throw "image_url is required!";
    if (price < 10) throw "price must be more than 10";
    if (price > 1000000) throw "Excessive price";

    await productsModel.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Added successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

server.listen(8000, () => {
  console.log("Server is started");
});
