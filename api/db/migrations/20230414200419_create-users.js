const TABLE_NAME='users';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, function(t){
    t.increments().primary();
    t.string('username').notNullable().unique();
    t.string('password').notNullable();
    t.boolean('isMature').notNullable().defaultTo(false);
    t.string('roles').notNullable().defaultTo('user');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
