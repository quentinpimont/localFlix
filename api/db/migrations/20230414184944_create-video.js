const TABLE_NAME='videos';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, function(t) {
    t.increments().primary();
    t.string('path').notNullable();
    t.smallint('episode').unsigned();
    t.smallint('season').unsigned();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
