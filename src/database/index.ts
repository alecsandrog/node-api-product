import knex from "knex";

import { env } from "../helpers";
import configs from "./knexfile";

const config = configs[env("NODE_ENV")];

const db = knex(config);

export default db;
