import { Customer } from "../entities/Customer";

interface ICustomersRepository {
  create(item: Customer): Promise<boolean>;

  find(): Promise<Customer[]>;

  findOne(id: string): Promise<Customer>;

  update(id: string, item: Customer): Promise<boolean>;

  remove(id: string): Promise<boolean>;

  findByCpf(cpf: string): Promise<Customer>;
}

export { ICustomersRepository };
