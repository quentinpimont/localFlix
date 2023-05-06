const express = require('express');
const { save, list, getById } = require('./categories-controller');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await list();
    res.json(categories);
});

router.get('/:id', async(req, res, next) => {
    try {
        const category = await getById(req.params.id);
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