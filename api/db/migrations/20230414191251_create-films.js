const TABLE_NAME = 'films';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, function(t){
    t.increments().primary();
    t.string('title').notNullable();
    t.boolean('isMature').notNullable();
    t.boolean('isSerie').notNullable();
    t.integer('cover_id').unsigned();
    t.foreign('cover_id').references('photos.id');
    t.integer('video_id').unsigned();
    t.foreign('video_id').references('videos.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
