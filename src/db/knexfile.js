export const development = {
  client: 'postgresql',
  connection: {
    database: 'app',
    user: 'app',
    password: 'app'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
}
