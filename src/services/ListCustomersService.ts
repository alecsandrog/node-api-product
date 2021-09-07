import { inject, injectable } from "tsyringe";

import { Customer } from "../entities/Customer";
import { ICustomersRepository } from "../repositories/ICustomersRepository";

@injectable()
class ListCustomersService {
  constructor(
    @inject("CustomersRepository")
    private repository: ICustomersRepository
  ) {}
  async execute(): Promise<Customer[]> {
    const list = await this.repository.find();

    return list;
  }
}

export { ListCustomersService };
