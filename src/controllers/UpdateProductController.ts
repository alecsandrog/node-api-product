import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductService } from "../services/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, price, slug } = req.body;
    const productService = container.resolve(UpdateProductService);
    const product = await productService.execute(
      { title, description, price, slug },
      id
    );

    return res.status(201).json(product);
  }
}

export { UpdateProductController };
