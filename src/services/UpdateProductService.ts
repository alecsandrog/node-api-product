import { inject, injectable } from "tsyringe";

import { Product } from "../entities/Product";
import { AppError } from "../errors/AppError";
import { IProductsRepository } from "../repositories/IProductsRepository";

interface IProductRequest {
  title: string;
  description: string;
  price: number;
  slug: string;
}
@injectable()
class UpdateProductService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}
  async execute(
    { title, description, price, slug }: IProductRequest,
    id: string
  ): Promise<Product> {
    const productExists = await this.repository.findOne(id);
    if (!productExists) {
      throw new AppError("Product don't exists!");
    }

    const product = new Product();
    product.title = title;
    product.description = description;
    product.price = price;
    product.slug = slug;

    await this.repository.update(id, product);
    const result = await this.repository.findOne(id);
    return result;
  }
}

export { UpdateProductService };
