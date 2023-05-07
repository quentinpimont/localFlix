const Repository = require("./repository");

class MatureRepository extends Repository {
    constructor(tablename){
        super(tablename);
    }

    async get(id, mature, error) {
        const data = await this.knex(this.tablename).select().where({
            id: id,
            isMature: mature
        })
        .first();
        if(data == undefined) {
            throw error
        }
        return data;
    }

    async list(mature) {
        return await this.knex(this.tablename).select().where('isMature', mature);
    }
}

module.exports = MatureRepository;