const jwt = require('jsonwebtoken');
require('dotenv').config();

function isAuth(req, res, next) {
    const auth = req.headers['authorization'];
    if(auth != undefined){
        const token = auth.split(' ')[1];
        const authInfo = jwt.decode(token, process.env.JWT_SECRET);
        req.userId = authInfo.id;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    isAuth,
}