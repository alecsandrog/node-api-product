import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUserService = container.resolve(DeleteUserService);
    await deleteUserService.execute(id);

    return res.sendStatus(204);
  }
}

export { DeleteUserController };
