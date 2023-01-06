// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'mealdb',
      user:     'Mac',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '/Users/Mac/Documents/meal-app/src/brand/db/migrations',
      tableName: 'knex_migrations',
      extension: 'ts'
    },
    seeds: {
      directory: './seeds',
    }
  }
};
