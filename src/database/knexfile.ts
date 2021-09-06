import { env } from "../helpers";

const configs = {
  development: {
    client: env("DB_CLIENT"),
    connection: {
      database: env("DB_NAME"),
      user: env("DB_USER"),
      password: env("DB_PASS"),
      port: env("DB_PORT"),
    },
    debug: true,
    migrations: {
      loadExtensions: [".ts"],
      extension: "ts",
      tableName: "knex_migrations",
      directory: "migrations",
    },
    seeds: {
      loadExtensions: [".ts"],
      extension: "ts",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  onUpdateTrigger: (table) => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `,
};

export default configs;
