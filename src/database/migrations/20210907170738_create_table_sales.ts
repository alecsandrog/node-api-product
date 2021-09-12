import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("sales", (table) => {
    table.increments("id").primary();
    table.integer("product_id").references("id").inTable("products");
    table.integer("customer_id").references("id").inTable("customers");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("sales");
}
