// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import { config } from 'dotenv';

config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory:
        '/Users/Mac/Documents/meal-app/src/addonUserCategory/db/migrations',
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },
};
