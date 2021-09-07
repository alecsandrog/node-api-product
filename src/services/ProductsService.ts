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
class ProductsService {
  constructor(
    @inject("ProductsRepository")
    private repository: IProductsRepository
  ) {}

  async listAll(): Promise<Product[]> {
    const list = await this.repository.find();
    return list;
  }

  async show(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);
    return product;
  }

  async create({
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

  async update(
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

  async delete(id: string): Promise<void> {
    const productExists = await this.repository.findOne(id);
    if (!productExists) {
      throw new AppError("Product don't exists!");
    }
    await this.repository.remove(id);
  }
}

export { ProductsService };
