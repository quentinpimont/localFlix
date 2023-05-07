const MatureRepository = require('./mature-repository');


class ActorsRepository extends MatureRepository{
    constructor (tablename = 'actors') {
        super(tablename)
    }
}

module.exports = {
    ActorsRepository    
}