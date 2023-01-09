// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import { config } from 'dotenv';

config();

module.exports = {
  development: {
    client: process.env.CLIENT || 'postgresql',
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
      __dirname + 'migrations',
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },

  production: {
    client: process.env.CLIENT || 'postgresql',
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
      __dirname + '/migrations',
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },
};
