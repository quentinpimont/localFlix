const express = require('express');
const router = express.Router();
const ActorController = require('./actors-controller');
const isMatureContent = require('../../middleWares/matureContentMiddleware');

router.get('/', isMatureContent, async (req, res) => {
    const actors = await ActorController.listActor(req.matureContent);
    res.json(actors);
});

router.get('/:id', isMatureContent, async (req, res, next) => {
    try {
        const actorId = req.params.id;
        const actor = await ActorController.getActorId(actorId, req.matureContent);
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