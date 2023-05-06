const TABLE_NAME = 'actors';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable(TABLE_NAME, (t) => {
    t.integer('photo_id').unsigned();
    t.foreign('photo_id').references('photos.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable(TABLE_NAME, (t) =>{
        t.dropColumn('photo_id');
    });
};
