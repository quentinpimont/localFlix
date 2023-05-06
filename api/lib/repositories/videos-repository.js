const Repository = require('./repository');

class VideosRepository extends Repository {
    constructor (tablename = 'videos') {
        super(tablename);
    }
}

module.exports = {
    VideosRepository
}