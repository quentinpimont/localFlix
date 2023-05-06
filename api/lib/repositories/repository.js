const { PGSQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR } = require('../../db/pgsql-errors');
const { DuplicateError } = require('../utils/error');
class Repository {
    constructor(tablename){
        this.tablename = tablename;
        this.knex = require('../../db/knex-connection');
    }

    async insert(data, error) {
        return this.knex(this.tablename).insert(data).returning('id')
        .then((data) => data)
        .catch((err) =>{
            if (err.code == PGSQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR) {
                throw new DuplicateError();
            }
        });
    }

    async get(id, error) {
        const category = await this.knex(this.tablename).select().where('id', id).first();
        if (category === undefined){
            throw error;
        }
        return category;
    }

    async list() {
        return await this.knex(this.tablename).select();
    }
    
    async delete(id) {}
}

module.exports = Repository