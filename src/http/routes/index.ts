import { Router } from "express";

import { customersRoutes } from "./customers.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/products", productsRoutes);
router.use("/customers", customersRoutes);

export { router };
