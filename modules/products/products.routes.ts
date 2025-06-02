import { Router } from "express";
import getProducts from "./controllers/getProducts";
import createProduct from "./controllers/createProduct";
import getSingleProduct from "./controllers/getSingleProduct";
import updateProduct from "./controllers/updateProduct";
import deleteProduct from "./controllers/deleteProduct";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:product_id", getSingleProduct);
productRouter.post("/", createProduct);
productRouter.patch("/", updateProduct);
productRouter.delete("/:product_id", deleteProduct);

export default productRouter;
