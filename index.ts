require("dotenv").config();

import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";

const server = express();

const products = [
  {
    id: "1",
    product_name: "Second Hand TVS",
    product_desc: "  Single Owner - 12,000 KM",
    price: "Rs. 20,000",
    image_url:
      "https://apollo.olx.in/v1/files/e76kivkov1m12-IN/image;s=600x1200;q=60",
  },
  {
    id: "2",
    product_name: "Sofa",
    product_desc: "Good Condition",
    price: "Rs. 5,000",
    image_url:
      "https://apollo.olx.in/v1/files/kq0riekhonar1-IN/image;s=600x1200;q=60",
  },
];

mongoose.connect(process.env.mongo_url!).then(() => {
  console.log("MongoDB connected successfully!");

  mongoose.connection.db?.collection("products").insertMany(products);
});

server.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});

server.get("/products", (req: Request, res: Response) => {
  res.send(products);
});

server.listen(8000, () => {
  console.log("Server is started");
});
