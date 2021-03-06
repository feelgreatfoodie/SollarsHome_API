exports.up = function (knex, Promise) {
  return knex.schema.createTable('schedules_shifts', (table) => {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('schedule_id').references('schedules.id').onDelete('CASCADE')
    table.integer('shift_id').references('shifts.id').onDelete('CASCADE')
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('schedules_shifts')
}
