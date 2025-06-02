import { Router } from "express";
import getProducts from "./controllers/getProducts";
import createProduct from "./controllers/createProduct";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);

export default productRouter;
