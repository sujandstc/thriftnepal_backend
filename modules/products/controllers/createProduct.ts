import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const createProduct = async (req: Request, res: Response) => {
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
};

export default createProduct;
