import { Router } from "express";
import getProducts from "./controllers/getProducts";
import createProduct from "./controllers/createProduct";
import getSingleProduct from "./controllers/getSingleProduct";
import updateProduct from "./controllers/updateProduct";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:product_id", getSingleProduct);
productRouter.post("/", createProduct);
productRouter.patch("/", updateProduct);

export default productRouter;
