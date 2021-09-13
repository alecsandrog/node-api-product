import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsService } from "../services/ListProductsService";

class ListProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const productsService = container.resolve(ListProductsService);
    const product = await productsService.execute();
    return res.json(product);
  }
}

export { ListProductsController };
