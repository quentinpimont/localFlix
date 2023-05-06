const TABLE_NAME='actors';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  function table(t){
    t.increments().primary();
    t.string('name').notNullable().unique();
    t.boolean('isMature').notNullable();
  }
  return knex.schema.createTable(TABLE_NAME, table);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
