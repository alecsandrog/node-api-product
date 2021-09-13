import { Router } from "express";

import { CreateProductController } from "../../controllers/CreateProductController";
import { DeleteProductController } from "../../controllers/DeleteProductController";
import { ListCustomersByProductController } from "../../controllers/ListCustomersByProductController";
import { ListProductsController } from "../../controllers/ListProductsController ";
import { ShowProductController } from "../../controllers/ShowProductController";
import { UpdateProductController } from "../../controllers/UpdateProductController";

const productsRoutes = Router();
const listCustomersByProductController = new ListCustomersByProductController();
const listProductsController = new ListProductsController();
const showProductController = new ShowProductController();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes
  .get("/", listProductsController.handle)
  .get("/customers/:id", listCustomersByProductController.handle)
  .get("/:id", showProductController.handle)
  .post("/", createProductController.handle)
  .put("/:id", updateProductController.handle)
  .delete("/:id", deleteProductController.handle);

export { productsRoutes };
