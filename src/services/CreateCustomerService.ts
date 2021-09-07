import { inject, injectable } from "tsyringe";

import { Customer } from "../entities/Customer";
import { AppError } from "../errors/AppError";
import { ICustomersRepository } from "../repositories/ICustomersRepository";

interface IRequestCustomer {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject("CustomersRepository") private repository: ICustomersRepository
  ) {}
  async execute({
    name,
    email,
    cpf,
    phone,
    cep,
    street,
    number,
    district,
    city,
    state,
  }: IRequestCustomer): Promise<Customer> {
    if (!cpf) {
      throw new AppError("CPF empty!");
    }
    const customer = new Customer();
    customer.name = name;
    customer.email = email;
    customer.cpf = cpf;
    customer.phone = phone;
    customer.cep = cep;
    customer.street = street;
    customer.number = number;
    customer.district = district;
    customer.city = city;
    customer.state = state;

    await this.repository.create(customer);

    const result = await this.repository.findByCpf(cpf);
    return result;
  }
}

export { CreateCustomerService };
