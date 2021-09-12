import { Router } from "express";

import { CreateCustomerController } from "../../controllers/CreateCustomerController";
import { ListCustomersController } from "../../controllers/ListCustomersController";

const customersRoutes = Router();
const createCustomerController = new CreateCustomerController();
const listCustomersController = new ListCustomersController();

customersRoutes
  .get("/", listCustomersController.handle)
  .post("/pay", createCustomerController.handle);

export { customersRoutes };
