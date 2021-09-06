import db from "../database";
import { User } from "../entities/User";
import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(db, "users");
  }
  async findByEmail(email: string): Promise<User> {
    const result = await this.db(this.tableName).where({ email }).first();
    return result;
  }
}
