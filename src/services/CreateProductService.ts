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
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  async execute({
    title,
    description,
    price,
    slug,
  }: IProductRequest): Promise<Product> {
    if (!title) {
      throw new AppError("Title empty!");
    }

    const slugAlreadyExists = await this.repository.findBySlug(slug);

    if (slugAlreadyExists) {
      throw new AppError("Slug already exists!");
    }
    const product = new Product();
    product.title = title;
    product.description = description;
    product.price = price;
    product.slug = slug;

    await this.repository.create(product);

    const result = await this.repository.findBySlug(slug);
    return result;
  }
}

export { CreateProductService };
