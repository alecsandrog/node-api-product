import { Product } from "../entities/Product";

interface IProductsRepository {
  create(item: Product): Promise<boolean>;

  find(): Promise<Product[]>;

  findOne(id: string): Promise<Product>;

  update(id: string, item: Product): Promise<boolean>;

  remove(id: string): Promise<boolean>;

  findBySlug(slug: string): Promise<Product>;
}

export { IProductsRepository };
