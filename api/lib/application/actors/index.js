const express = require('express');
const router = express.Router();
const ActorController = require('./actors-controller');

router.get('/', async (req, res) => {
    const actors = await ActorController.listActor();
    res.json(actors);
});

router.get('/:id', async (req, res, next) => {
    try {
        const actorId = req.params.id;
        const actor = await ActorController.getActorId(actorId);
        res.json(actor);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        await ActorController.saveActor(req.body);
        res.statusCode = 201;
        res.json();
    } catch (error) {
        next(error);
    }
});

module.exports = router;