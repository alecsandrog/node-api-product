import { Request, Response } from "express";

import { ShowUserService } from "../services/ShowUserService";

class ShowUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showUserService = new ShowUserService();
    const user = await showUserService.execute(id);

    return res.json(user);
  }
}

export { ShowUserController };
