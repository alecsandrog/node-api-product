import { inject, injectable } from "tsyringe";

import { AppError } from "../errors/AppError";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
class DeleteProductService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const productExists = await this.repository.findOne(id);
    if (!productExists) {
      throw new AppError("Product don't exists!");
    }
    await this.repository.remove(id);
  }
}

export { DeleteProductService };
