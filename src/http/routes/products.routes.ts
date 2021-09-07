import { Router } from "express";

import { ProductsController } from "../../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes
  .get("/", productsController.listAll)
  .get("/:id", productsController.show)
  .post("/", productsController.create)
  .put("/:id", productsController.update)
  .delete("/:id", productsController.delete);

export { productsRoutes };
