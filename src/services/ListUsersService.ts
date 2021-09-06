import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class ListUsersService {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}
  async execute(): Promise<User[]> {
    const list = await this.repository.find();

    return list;
  }
}

export { ListUsersService };
