// Update with your config settings.
require('dotenv').config({ path: `${__dirname}/../.env` });
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 4
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 4
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
