import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class ListUsersService {
  async execute(): Promise<User[]> {
    const repository = new UserRepository();
    const list = await repository.find();

    return list;
  }
}

export { ListUsersService };
