// This module enables retrieval and persistence of data via parametrised queries to the database
const { Connection } = require('./connection');

const createRecipe = async (recipe) => {
  const sql = `INSERT INTO recipes (title, short_description, preparation_time) 
               VALUES ($1, $2, $3)`;
  return Connection.run(sql, [recipe.title, recipe.short_description, recipe.preparation_time]);
};

const deleteRecipe = async (id) => {
  const sql = `DELETE FROM recipes 
               WHERE recipe_id = $1`;
  return Connection.run(sql, [id]);
};

const getRecipes = async (searchTerm) => {
  if (!searchTerm) {
    const sql = `SELECT recipe_id, title, short_description, preparation_time 
           FROM recipes 
           ORDER BY title`;
    return Connection.all(sql, []);
  }
  const sql = `SELECT recipe_id, title, short_description, preparation_time 
           FROM recipes 
           WHERE title LIKE $1
           OR short_description LIKE $2 
           ORDER BY title`;
  return Connection.all(sql, [`%${searchTerm}%`, `%${searchTerm}%`]);
};

const getRecipe = async (id) => {
  const sql = `SELECT recipe_id, title, short_description, preparation_time 
               FROM recipes 
               WHERE recipe_id = $1`;
  return Connection.get(sql, [id]);
};

const updateRecipe = async (id, recipe) => {
  const sql = `UPDATE recipes
               SET title = $1, short_description = $2, preparation_time = $3
               WHERE recipe_id = $4`;
  return Connection.run(sql, [recipe.title, recipe.short_description, recipe.preparation_time, id]);
};

module.exports = {
  createRecipe,
  deleteRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
};
