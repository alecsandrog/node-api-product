import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class ShowUserService {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}
  async execute(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { ShowUserService };
