const express = require('express');
const { save } = require('./users-controller');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        await save(req.body);
        res.statusCode = 201
        res.json();
    } catch (error) {
        next(error);
    } 
});

module.exports = router