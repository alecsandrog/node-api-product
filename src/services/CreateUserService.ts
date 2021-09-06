import { hash } from "bcrypt";

import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  email: string;
  password: string;
}
class CreateUserService {
  async execute({ email, password }: IUserRequest): Promise<User> {
    const repository = new UserRepository();

    if (!email) {
      throw new AppError("Email incorrect!");
    }

    const userAlreadyExists = await repository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = new User();
    user.email = email;
    user.password = passwordHash;

    repository.create(user);

    const result = await repository.findByEmail(email);
    return result;
  }
}

export { CreateUserService };
