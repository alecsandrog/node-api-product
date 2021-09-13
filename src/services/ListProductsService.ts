import { inject, injectable } from "tsyringe";

import { Product } from "../entities/Product";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class ListProductsService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const list = await this.repository.find();
    return list;
  }
}

export { ListProductsService };
