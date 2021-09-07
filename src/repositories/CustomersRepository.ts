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
}

export { CustomersRepository };
