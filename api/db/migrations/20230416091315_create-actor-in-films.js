const TABLE_NAME = 'casting';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, (t) => {
    t.increments().primary();
    t.integer('film_id').unsigned().notNullable();
    t.integer('actor_id').unsigned().notNullable();
    t.foreign('film_id').references('films.id');
    t.foreign('actor_id').references('actors.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};
