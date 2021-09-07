import { container } from "tsyringe";

import { CustomersRepository } from "../repositories/CustomersRepository";
import { ICustomersRepository } from "../repositories/ICustomersRepository";
import { IProductsRepository } from "../repositories/IProductsRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ProductsRepository } from "../repositories/ProductsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICustomersRepository>(
  "CustomersRepository",
  CustomersRepository
);
