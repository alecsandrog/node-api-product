import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class ShowUserService {
  async execute(id: string): Promise<User> {
    const repository = new UserRepository();
    const user = await repository.findOne(id);
    return user;
  }
}

export { ShowUserService };
