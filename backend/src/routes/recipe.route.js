const express = require('express');
const recipeController = require('../controllers/recipe.controller');
const { CustomException, NotFoundException } = require('../utils/errors');

const router = express.Router();

// Accepts the recipe submitted and calls the controller to persist it
router.post('/', async (req, res, next) => {
  try {
    const result = await recipeController.createRecipe(req.body);
    res.setHeader('Location', `/${result.recipe_id}`);
    res.status(201).send(result);
  } catch (err) {
    next(new CustomException('Unable to create recipe', err));
  }
});

// Calls the controller to delete the recipe corresponding to the ID in the URL
router.delete('/:id', async (req, res) => {
  const result = await recipeController.deleteRecipe(req.params.id);
  res.status(200).send(result);
});

// Gets all recipes according to the search term in the supplied query parameter
router.get('/', async (req, res) => {
  const searchTerm = req.query.search;
  const result = await recipeController.getRecipes(searchTerm);
  res.status(200).send(result);
});

// Gets an individual recipe from the ID supplied in the URL
router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await recipeController.getRecipe(req.params.id);
    if (!recipe) {
      throw new NotFoundException('recipe not found');
    }
    res.send(recipe);
  } catch (e) {
    next(e);
  }
});

// Updates the recipe corresponding to the ID in the URL with the supplied data
router.put('/:id', async (req, res) => {
  res.send(await recipeController.updateRecipe(req.params.id, req.body));
});


module.exports = router;
