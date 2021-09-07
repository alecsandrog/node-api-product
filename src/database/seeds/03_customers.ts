import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("customers").del();

  // Inserts seed entries
  await knex("customers").insert([
    {
      name: "Emma Torn",
      email: "emma@email.com",
      cpf: "000.000.000-00",
      phone: "11 4444-4444",
      cep: "74444-000",
      street: "Av. T",
      number: "4",
      district: "Center",
      city: "São Paulo",
      state: "SP",
    },
  ]);
}
