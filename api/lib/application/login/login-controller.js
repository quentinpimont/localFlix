const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UsersRepository } = require('../../repositories/users-repository');
const { LoginError } = require('../../utils/error');
require('dotenv').config();

const repo = new UsersRepository();

async function login(loginInfo) {
    const user = await repo.getUserByUsername(loginInfo.username);
    if(user != undefined) {
        if(bcrypt.compareSync(loginInfo.password, user.password)){
            return {
                authToken : jwt.sign({id : user.id}, process.env.JWT_SECRET, { algorithm: 'HS256' })
            }
        }
    }
    throw new LoginError();
}

module.exports = {
    login
}