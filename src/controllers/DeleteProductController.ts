import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const productService = container.resolve(DeleteProductService);
    await productService.execute(id);

    return res.sendStatus(204);
  }
}

export { DeleteProductController };
