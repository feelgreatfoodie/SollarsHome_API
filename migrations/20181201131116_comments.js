exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('body', 800).notNullable().defaultTo('')
    table.string('user', 64).references('users.id').onDelete('CASCADE')
    table.string('order', 64).references('orders.id').onDelete('CASCADE')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo('')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
