import { inject, injectable } from "tsyringe";

import { Product } from "../entities/Product";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class ShowProductService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  async execute(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);
    return product;
  }
}

export { ShowProductService };
