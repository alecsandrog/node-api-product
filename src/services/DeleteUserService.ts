import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";

class DeleteUserService {
  async execute(id: string): Promise<void> {
    const repository = new UserRepository();

    const userExists = await repository.findOne(id);
    if (!userExists) {
      throw new AppError("User don't exists!");
    }
    await repository.remove(id);
  }
}

export { DeleteUserService };
