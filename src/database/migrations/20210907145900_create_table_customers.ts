import { Knex } from "knex";

import configs from "../knexfile";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("customers", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email");
      table.string("cpf");
      table.string("phone");
      table.string("cep");
      table.string("street");
      table.string("number");
      table.string("district");
      table.string("city");
      table.string("state");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(configs.onUpdateTrigger("customers")));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("customers");
}
