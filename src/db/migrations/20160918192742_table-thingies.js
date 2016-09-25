export const up = ({ schema }) =>
  schema
    .createTable('users', tb => {
      tb.increments('id')
        .primary()
      tb.string('username')
        .unique()
        .notNullable()
      tb.string('password')
        .notNullable()
    })

export const down = ({ schema }) => 
  schema
    .dropTable('users')
