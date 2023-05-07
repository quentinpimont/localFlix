const MatureRepository = require('./mature-repository');

class CategoriesReposistory extends MatureRepository {
    constructor(tablename = 'categories') {
        super(tablename);
    }
}

module.exports = {
    CategoriesReposistory
}