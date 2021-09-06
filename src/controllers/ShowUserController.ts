import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowUserService } from "../services/ShowUserService";

class ShowUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showUserService = container.resolve(ShowUserService);
    const user = await showUserService.execute(id);

    return res.json(user);
  }
}

export { ShowUserController };
