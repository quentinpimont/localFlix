const {FilmsRepository} = require('../../repositories/films-repository');
const {FilmNotFound} = require('../../utils/error');

const repo = new FilmsRepository();

module.exports = {
    async listFilms() {
        const films = await repo.listFilmsWithRelationBy();
        return films;
    },
    async saveFilm(data) {
        const video = data.video;
        const film = data.film;
        const cover = data.cover;
        await repo.insertFilmAndRelation(film, video, cover);
    },
    async getFilm(id) {
        const film = await repo.get(id, new FilmNotFound());
        return film;
    },
}