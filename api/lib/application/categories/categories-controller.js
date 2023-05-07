const { CategoriesReposistory } = require("../../repositories/categories-repository");
const Category = require('../../models/catgory');
const { CategoryNotFound } = require('../../utils/error');

const repo = new CategoriesReposistory();

module.exports = {
 async save(category){
    await repo.insert(category);
 },

 async list(matureContent){
    const categories = await repo.list(matureContent);
    return categories;
 },
 
 async getById(id, matureContent) {
    const category = await repo.get(id, matureContent, new CategoryNotFound());
    return category;
 }
}