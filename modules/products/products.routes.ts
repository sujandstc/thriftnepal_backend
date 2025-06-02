import { Router } from "express";
import getProducts from "./controllers/getProducts";
import createProduct from "./controllers/createProduct";
import getSingleProduct from "./controllers/getSingleProduct";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:product_id", getSingleProduct);
productRouter.post("/", createProduct);

export default productRouter;
