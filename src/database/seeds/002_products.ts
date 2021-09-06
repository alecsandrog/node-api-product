import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    {
      title: "Curso JS",
      description: "Description of course",
      price: 199.99,
      slug: "course-js",
    },
    {
      title: "Curso Node",
      description: "Description of course",
      price: 299.99,
      slug: "course-node",
    },
  ]);
}
