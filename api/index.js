const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./lib/application/index');
const { isAuth } = require('./lib/middleWares/authMiddleWare');
const app = express();
const port = 3000;

const errorHandling = (err, req, resp, next) => {
    req.header('Content-Type', 'application/json');
    const status = err.code || 400
    resp.status(status).json(err.message);
    next(err);
}

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({
        name: 'localflix',
        author: 'pimouss'
    });
});

app.use('/api/users', routes.users);
app.use('/api/login', routes.login);
app.use('/api/categories', isAuth, routes.categories);
app.use('/api/actors', isAuth, routes.actors);
app.use('/api/films', isAuth, routes.films);

app.use(errorHandling);

app.listen(port, () => {
    console.log(`app listen on port http://127.0.0.1:${port}`);
});