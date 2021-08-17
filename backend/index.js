const { app, connectToDataSources } = require('./src/app');

const port = 3000;
app.listen(port, async () => {
  await connectToDataSources();
});
