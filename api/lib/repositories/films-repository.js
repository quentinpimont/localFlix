const MatureRepository = require('./mature-repository');

class FilmsRepository extends MatureRepository {
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

    async listFilmsWithRelationBy(matureContent) {
        const films = await this.knex(this.tablename)
        .join('photos', 'films.cover_id', '=', 'photos.id')
        .select('films.id', 'films.title', 'photos.path as cover')
        .where('films.isMature', matureContent);
        return films
    }

    async getVideoPath(id) {
        const data = await this.knex(this.tablename)
        .join('videos', 'films.video_id', '=', 'videos.id')
        .select('videos.path as video_path').where('films.id', id).first();
        return data.video_path;
    }
}

module.exports = {
    FilmsRepository
}