import { Knex } from "knex";

import configs from "../knexfile";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.text("email").unique().notNullable();
      table.text("password").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(configs.onUpdateTrigger("users")));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
