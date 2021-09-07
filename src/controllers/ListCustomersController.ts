import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCustomersService = container.resolve(ListCustomersService);
    const customers = await listCustomersService.execute();

    return res.json(customers);
  }
}

export { ListCustomersController };
