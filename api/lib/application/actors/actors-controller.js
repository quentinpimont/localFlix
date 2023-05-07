const {ActorsRepository} = require('../../repositories/actors-repository');
const {ActorNotFound} = require('../../utils/error');

const repo = new ActorsRepository();

module.exports = {
    async listActor(matureContent) {
        const actors = await repo.list(matureContent);
        return actors;
    },

    async saveActor(actor) {
        await repo.insert(actor);
    },

    async getActorId(id, matureContent){
        const actor = await repo.get(id, matureContent, new ActorNotFound());
        return actor; 
    }
}