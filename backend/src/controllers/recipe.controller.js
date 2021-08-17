const recipeConnector = require('../connectors/recipe.connector');
const { BadRequestException } = require('../utils/errors');

const createRecipe = async (recipe) => recipeConnector.createRecipe(recipe);

const deleteRecipe = async (id) => recipeConnector.deleteRecipe(id);

const getRecipes = async (searchTerm) => recipeConnector.getRecipes(searchTerm);

const getRecipe = async (id) => recipeConnector.getRecipe(id);

const updateRecipe = async (id, recipe) => recipeConnector.updateRecipe(id, recipe);

module.exports = {
  createRecipe,
  deleteRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
};
