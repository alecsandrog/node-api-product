import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowProductService } from "../services/ShowProductService";

class ShowProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const productService = container.resolve(ShowProductService);
    const product = await productService.execute(id);
    return res.json(product);
  }
}

export { ShowProductController };
