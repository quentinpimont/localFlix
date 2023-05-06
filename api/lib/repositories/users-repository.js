const knex = require('../../db/knex-connection');
const Repository = require('./repository');

class UsersRepository extends Repository {
    constructor (tablename = 'users') {
        super(tablename);
    }

    async getUserByUsername(username) {
        const user = await this.knex(this.tablename).select()
        .where({username: username})
        .first();
        return user;
    }
}


module.exports = {
    UsersRepository
}