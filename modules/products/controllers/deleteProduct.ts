import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params;

    if (!product_id) throw "Please provide product id";

    const getProduct = await productsModel.findOne({
      _id: product_id,
    });

    if (!getProduct) throw "Product not found!";

    await productsModel.deleteOne({
      _id: product_id,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }

  res.status(200).json({
    message: "Product deleted successfully!",
  });
};

export default deleteProduct;
