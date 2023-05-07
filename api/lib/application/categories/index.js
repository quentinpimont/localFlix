const express = require('express');
const { save, list, getById } = require('./categories-controller');
const isMatureContent = require('../../middleWares/matureContentMiddleware');
const router = express.Router();

router.get('/', isMatureContent, async (req, res) => {
    const categories = await list(req.matureContent);
    res.json(categories);
});

router.get('/:id', isMatureContent, async(req, res, next) => {
    try {
        const category = await getById(req.params.id, req.matureContent);
        res.json(category);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try{
        await save(req.body);
        res.statusCode = 201;
        res.json();
    } catch(err) {
        next(err);
    }
});

module.exports = router