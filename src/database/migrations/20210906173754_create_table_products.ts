import { Knex } from "knex";

import configs from "../knexfile";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("products", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.text("description");
      table.decimal("price").notNullable();
      table.string("slug").notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(configs.onUpdateTrigger("products")));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("products");
}
