import { hash } from "bcrypt";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  const passwordHash = await hash("123456", 8);

  // Inserts seed entries
  await knex("users").insert([
    { email: "admin@email.com", password: passwordHash },
  ]);
}
