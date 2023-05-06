const TABLE_NAME = 'categories';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable(TABLE_NAME, function(t) {
      t.increments().primary();
      t.string('name').notNullable().unique();
      t.boolean('isMature').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
