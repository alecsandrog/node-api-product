import dotenv from "dotenv";
import { Knex } from "knex";

dotenv.config({ path: "../../.env" });

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: process.env.DB_CLIENT || "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT),
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
};

export default configs;
