const express = require('express');
const { login } = require('./login-controller');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        res.json(await login(req.body));
    } catch (err) {
        next(err);
    }
});

module.exports = router