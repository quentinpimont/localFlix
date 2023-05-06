const Repository = require('./repository');


class ActorsRepository extends Repository{
    constructor (tablename = 'actors') {
        super(tablename)
    }
}

module.exports = {
    ActorsRepository    
}