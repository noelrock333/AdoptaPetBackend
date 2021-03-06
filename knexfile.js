// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://postgres@127.0.0.1:5432/adopta_pet',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
    debug: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true' || 'postgres://postgres@127.0.0.1:5432/adopta_pet',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }

};
