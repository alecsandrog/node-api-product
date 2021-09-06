import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IUserRequest {
  email: string;
  password: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}
  async execute({ email, password }: IUserRequest, id: string): Promise<User> {
    const userExists = await this.repository.findOne(id);
    if (!userExists) {
      throw new AppError("User don't exists!");
    }

    const user = new User();
    user.email = email;
    user.password = password;

    this.repository.update(id, user);
    const result = this.repository.findByEmail(email);
    return result;
  }
}

export { UpdateUserService };
