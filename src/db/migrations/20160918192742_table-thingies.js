export const up = ({ schema }) =>
  schema
    .createTable('thingies', tb => {
      tb.increments('id')
        .primary()
      tb.string('description')
        .notNullable()
    })

export const down = ({ schema }) =>
  schema
    .dropTable('thingies')
