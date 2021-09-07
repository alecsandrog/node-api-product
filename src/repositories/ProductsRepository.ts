import db from "../database";
import { Product } from "../entities/Product";
import { BaseRepository } from "./BaseRepository";
import { IProductsRepository } from "./IProductsRepository";

class ProductsRepository
  extends BaseRepository<Product>
  implements IProductsRepository
{
  constructor() {
    super(db, "products");
  }

  async findBySlug(slug: string): Promise<Product> {
    const result = await this.db(this.tableName).where({ slug }).first();
    return result;
  }
}

export { ProductsRepository };
