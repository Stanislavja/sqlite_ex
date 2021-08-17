const express = require('express');
const recipeRouter = require('./routes/recipe.route');
const { Connection } = require('./connectors/connection');

const app = express();

app.use(express.json()); // support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // support URL-encoded bodies

app.use('/recipes', recipeRouter);

const connectToDataSources = async () => {
  await Connection.connect();
};

module.exports = { app, connectToDataSources };
