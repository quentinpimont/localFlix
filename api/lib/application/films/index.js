const express = require('express');
const router = express.Router();
const filmsController = require('./films-controller');

router.get('/', async(req, res) => {
    const films = await filmsController.listFilms();
    res.json(films);
});

router.get('/:id', async(req, res, next) => {
    try {
        const film = await filmsController.getFilm(req.params.id);
        res.json(film);
    } catch (error) {
        next(error);
    }
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