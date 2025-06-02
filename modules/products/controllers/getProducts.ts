import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const getProducts = async (req: Request, res: Response) => {
  const allProducts = await productsModel.find({});

  res.status(200).json({
    data: allProducts,
  });
};

export default getProducts;
