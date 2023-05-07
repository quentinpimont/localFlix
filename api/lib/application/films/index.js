const express = require('express');
const router = express.Router();
const isMatureContent = require('../../middleWares/matureContentMiddleware')
const filmsController = require('./films-controller');
const fs = require('fs');

router.get('/', isMatureContent, async(req, res) => {
    const films = await filmsController.listFilms(req.matureContent);
    res.json(films);
});

router.get('/:id', isMatureContent, async(req, res, next) => {
    try {
        const film = await filmsController.getFilm(req.params.id, req.matureContent);
        res.json(film);
    } catch (error) {
        next(error);
    }
});

router.get('/:id/watch', async(req, res, next) => {
    const range = req.headers.range;
    if(!range){
        res.status(400).json({error: "Require Range header"});
    }
    const streamData = await filmsController.getStreamData(req.params.id, range);
    const headers = {
        "Content-Range": `bytes ${streamData.start}-${streamData.end}/${streamData.videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": streamData.contentLength,
        "Content-Type": "video/mp4",
    }
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(streamData.videoPath, {
        start: streamData.start,
         end: streamData.end
    });
    videoStream.pipe(res);
});

router.post('/', async(req, res, next) => {
    try {
        await filmsController.saveFilm(req.body);
        res.statusCode = 201
        res.json();
    } catch (error) {
        next(error);
    }
});

module.exports = router;