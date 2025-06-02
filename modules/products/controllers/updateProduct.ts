import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const updateProduct = async (req: Request, res: Response) => {
  try {
    if (!req.body) throw "Please provide payload.";

    const { product_id, product_name, product_desc } = req.body;

    if (!product_id) throw "Please provide product id";

    await productsModel.updateOne(
      {
        _id: product_id,
      },
      {
        product_name: product_name,
        product_desc: product_desc,
      }
    );
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }

  res.status(200).json({
    message: "Product updated successfully!",
  });
};

export default updateProduct;
