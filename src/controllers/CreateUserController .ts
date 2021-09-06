import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ email, password });

    return res.status(201).send(user);
  }
}

export { CreateUserController };
