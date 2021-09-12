import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCustomersByProductService } from "../services/ListCustomersByProductService";

class ListCustomersByProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCustomersService = container.resolve(
      ListCustomersByProductService
    );
    const customers = await listCustomersService.execute(req.params.id);

    return res.json(customers);
  }
}

export { ListCustomersByProductController };
