import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IUserRequest {
  email: string;
  password: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}
  async execute({ email, password }: IUserRequest): Promise<User> {
    if (!email) {
      throw new AppError("Email incorrect!");
    }

    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = new User();
    user.email = email;
    user.password = passwordHash;

    await this.repository.create(user);

    const result = await this.repository.findByEmail(email);
    return result;
  }
}

export { CreateUserService };
