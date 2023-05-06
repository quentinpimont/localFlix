const Repository = require('./repository');

class FilmsRepository extends Repository {
    constructor (tablename = 'films') {
        super(tablename);
    }

    async insertFilmAndRelation(film, video, cover) {
        try {
            await this.knex.transaction(async (trx) => {
                const videoId = await trx('videos').insert(video, 'id');
                film.video_id = videoId[0].id;
                if (cover) {
                    const coverId = await trx('photos').insert(cover, 'id');
                    film.cover_id = coverId[0].id;
                }
                await trx('films').insert(film);
            });
        } catch (error) {
            console.error(error);
        }
    }

    async listFilmsWithRelationBy() {
        const films = await this.knex(this.tablename)
        .join('photos', 'films.cover_id', '=', 'photos.id')
        .select('films.id', 'films.title', 'photos.path as cover');
        return films
    }
}

module.exports = {
    FilmsRepository
}