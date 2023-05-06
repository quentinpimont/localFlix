const bcrypt = require('bcrypt');
const { UsersRepository } = require('../../repositories/users-repository');
require('dotenv').config()

const repo = new UsersRepository();

async function save(user) {
    user.password = bcrypt.hashSync(user.password, Number(process.env.SALT_ROUND));
    await repo.insert(user);
}

module.exports = {
    save,
}