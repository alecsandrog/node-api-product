import db from "../database";
import { Customer } from "../entities/Customer";
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

  async listCustomers(idProduct: string): Promise<Customer[]> {
    const result = await this.db("customers")
      .innerJoin("sales", "customers.id", "=", "sales.customer_id")
      .select("customers.*")
      .where({ product_id: idProduct });
    return result;
  }

  async findBySlug(slug: string): Promise<Product> {
    const result = await this.db(this.tableName).where({ slug }).first();
    return result;
  }
}

export { ProductsRepository };
