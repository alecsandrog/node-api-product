import { User } from "../entities/User";

interface IUsersRepository {
  create(item: User): Promise<boolean>;

  find(): Promise<User[]>;

  findOne(id: string): Promise<User>;

  update(id: string, item: User): Promise<boolean>;

  remove(id: string): Promise<boolean>;

  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
