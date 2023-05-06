const express = require('express');
const router = express.Router();
const videosController = require('./videos-controller');

router.get('/', async(req, res) => {
    const films = await videosController.listFilms();
    res.json(films);
});

router.get('/:id', async(req, res, next) => {
    try {
        const film = await videosController.getVideo(req.params.id);
        res.json(film);
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req, res, next) => {
    try {
        await videosController.saveVideo(req.body);
    } catch (error) {
        next(error);
    }
});

module.exports = router;