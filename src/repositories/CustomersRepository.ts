import db from "../database";
import { Customer } from "../entities/Customer";
import { BaseRepository } from "./BaseRepository";
import { ICustomersRepository } from "./ICustomersRepository";

class CustomersRepository
  extends BaseRepository<Customer>
  implements ICustomersRepository
{
  constructor() {
    super(db, "customers");
  }

  async findByCpf(cpf: string): Promise<Customer> {
    const result = await this.db(this.tableName).where({ cpf }).first();
    return result;
  }

  async createCustomerWithSale(
    item: Customer,
    idProduct: string
  ): Promise<string> {
    let idCustomer = "";
    await this.db(this.tableName)
      .insert(item)
      .returning("id")
      .then(async ([id]) => {
        await this.db("sales").insert({
          customer_id: id,
          product_id: idProduct,
        });
        idCustomer = id;
      });
    return idCustomer;
  }
}

export { CustomersRepository };
