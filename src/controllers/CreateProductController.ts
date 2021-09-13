import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description, price, slug } = req.body;
    const productService = container.resolve(CreateProductService);
    const product = await productService.execute({
      title,
      description,
      price,
      slug,
    });

    return res.status(201).send(product);
  }
}

export { CreateProductController };
