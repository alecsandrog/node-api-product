import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { email, password } = req.body;

    const updateUserService = container.resolve(UpdateUserService);
    const user = await updateUserService.execute({ email, password }, id);

    return res.status(201).json(user);
  }
}

export { UpdateUserController };
