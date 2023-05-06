const {VideosRepository} = require('../../repositories/videos-repository');
const {VideoNotFound} = require('../../utils/error');

const repo = new VideosRepository();

module.exports = {
    async listVideos() {
        const films = await repo.list();
        return films;
    },
    async saveVideo(film) {
        await repo.insert(film);
    },
    async getVideo(id) {
        const film = await repo.get(id, VideoNotFound);
        return film;
    },
}