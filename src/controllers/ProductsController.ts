import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProductsService } from "../services/ProductsService";

class ProductsController {
  async listAll(req: Request, res: Response): Promise<Response> {
    const productsService = container.resolve(ProductsService);
    const product = await productsService.listAll();
    return res.json(product);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const productService = container.resolve(ProductsService);
    const product = await productService.show(id);
    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, description, price, slug } = req.body;
    const productService = container.resolve(ProductsService);
    const product = await productService.create({
      title,
      description,
      price,
      slug,
    });

    return res.status(201).send(product);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, price, slug } = req.body;
    const productService = container.resolve(ProductsService);
    const product = await productService.update(
      { title, description, price, slug },
      id
    );

    return res.status(201).json(product);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const productService = container.resolve(ProductsService);
    await productService.delete(id);

    return res.sendStatus(204);
  }
}

export { ProductsController };
