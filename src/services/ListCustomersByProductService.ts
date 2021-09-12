import { inject, injectable } from "tsyringe";

import { Customer } from "../entities/Customer";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class ListCustomersByProductService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}
  async execute(id: string): Promise<Customer[]> {
    const list = await this.repository.listCustomers(id);

    return list;
  }
}

export { ListCustomersByProductService };
