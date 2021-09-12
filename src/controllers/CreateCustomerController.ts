import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
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
      idProduct,
    } = req.body;

    const createCustomerService = container.resolve(CreateCustomerService);
    const customer = await createCustomerService.execute(
      {
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
      },
      idProduct
    );
    return res.status(201).send(customer);
  }
}

export { CreateCustomerController };
