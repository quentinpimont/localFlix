const Repository = require('./repository')

class CategoriesReposistory extends Repository {
    constructor(tablename = 'categories') {
        super(tablename);
    }
}

module.exports = {
    CategoriesReposistory
}