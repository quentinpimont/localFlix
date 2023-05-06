const { CategoriesReposistory } = require("../../repositories/categories-repository");
const Category = require('../../models/catgory');
const { CategoryNotFound } = require('../../utils/error');

const repo = new CategoriesReposistory();

module.exports = {
 async save(category){
    await repo.insert(category);
 },

 async list(){
    const categories = await repo.list();
    return categories;
 },
 
 async getById(id) {
    const category = await repo.get(id, new CategoryNotFound());
    return category;
 }
}