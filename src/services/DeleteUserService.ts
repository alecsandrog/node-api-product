import { inject, injectable } from "tsyringe";

import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.repository.findOne(id);
    if (!userExists) {
      throw new AppError("User don't exists!");
    }
    await this.repository.remove(id);
  }
}

export { DeleteUserService };
