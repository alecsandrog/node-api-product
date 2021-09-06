import { Request, Response } from "express";

import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUsersService = new ListUsersService();
    const all = await listUsersService.execute();

    return res.json(all);
  }
}

export { ListUsersController };
