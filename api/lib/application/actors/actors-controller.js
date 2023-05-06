const {ActorsRepository} = require('../../repositories/actors-repository');
const {ActorNotFound} = require('../../utils/error');

const repo = new ActorsRepository();

module.exports = {
    async listActor() {
        const actors = await repo.list();
        return actors;
    },

    async saveActor(actor) {
        await repo.insert(actor);
    },

    async getActorId(id){
        const actor = await repo.get(id, new ActorNotFound());
        return actor; 
    }
}