const { log } = require('console');
const {FilmsRepository} = require('../../repositories/films-repository');
const { VideosRepository } = require('../../repositories/videos-repository');
const {FilmNotFound} = require('../../utils/error');
const fs = require('fs');

const filmsRepo = new FilmsRepository();
const videosRepo = new VideosRepository();

module.exports = {
    async listFilms(matureContent) {
        const films = await filmsRepo.listFilmsWithRelationBy(matureContent);
        return films;
    },
    async saveFilm(data) {
        const video = data.video;
        const film = data.film;
        const cover = data.cover;
        await filmsRepo.insertFilmAndRelation(film, video, cover);
    },
    async getFilm(id, matureContent) {
        const film = await filmsRepo.get(id, matureContent, new FilmNotFound());
        return film;
    },
    async getStreamData(id, range) {
        const videoPath = await filmsRepo.getVideoPath(id);
        const videoSize = fs.statSync(videoPath).size;
        const chunkSize = 10 ** 6; //1MB\
        const start = Number(range.replace(/\D/g, ''));
        const end = Math.min(start + chunkSize, videoSize - 1);
        const contentLength = end - start + 1;
        const ret = {
            videoPath,
            contentLength,
            start,
            end,
            videoSize
        }
        console.log(ret);
        return ret;
    }
}