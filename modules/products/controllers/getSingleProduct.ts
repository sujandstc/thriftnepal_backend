import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const getSingleProduct = async (req: Request, res: Response) => {
  const { product_id } = req.params;

  const data = await productsModel.findOne({
    _id: product_id,
  });

  res.status(200).json({
    data: data,
  });
};

export default getSingleProduct;
