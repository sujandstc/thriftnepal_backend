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

  if (!product_name) {
    res.status(400).json({
      message: "Product name is required",
    });
    return;
  }

  if (!product_desc) {
    res.status(400).json({
      message: "Product desc is required",
    });
    return;
  }

  if (!price) {
    res.status(400).json({
      message: "Price  is required",
    });
    return;
  }

  if (price < 10) {
    res.status(400).json({
      message: "Price must be more than 10",
    });
    return;
  }

  if (!image_url) {
    res.status(400).json({
      message: "image_url  is required",
    });
    return;
  }

  try {
    await productsModel.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Added successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to enter data!",
      errorData: JSON.stringify(error),
    });
  }
});

server.listen(8000, () => {
  console.log("Server is started");
});
