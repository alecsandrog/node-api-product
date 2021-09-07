import db from "../database";
import { User } from "../entities/User";
import { BaseRepository } from "./BaseRepository";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository extends BaseRepository<User> implements IUsersRepository {
  constructor() {
    super(db, "users");
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.db(this.tableName).where({ email }).first();
    return result;
  }
}

export { UsersRepository };
