import { Router } from "express";

import { ListCustomersByProductController } from "../../controllers/ListCustomersByProductController";
import { ProductsController } from "../../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();
const listCustomersByProductController = new ListCustomersByProductController();

productsRoutes
  .get("/", productsController.listAll)
  .get("/customers/:id", listCustomersByProductController.handle)
  .get("/:id", productsController.show)
  .post("/", productsController.create)
  .put("/:id", productsController.update)
  .delete("/:id", productsController.delete);

export { productsRoutes };
