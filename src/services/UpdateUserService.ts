import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  email: string;
  password: string;
}

class UpdateUserService {
  async execute({ email, password }: IUserRequest, id: string): Promise<User> {
    const repository = new UserRepository();

    const userExists = await repository.findOne(id);
    if (!userExists) {
      throw new AppError("User don't exists!");
    }

    const user = new User();
    user.email = email;
    user.password = password;

    repository.update(id, user);
    const result = repository.findByEmail(email);
    return result;
  }
}

export { UpdateUserService };
