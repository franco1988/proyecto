const server = require('./src/index.js');
const { conn } = require('./src/dataBase.js');

// Syncing all the models at once.
conn.sync({ force: false}).then(() => {
  server.listen(8080, () => {
    console.log('%s listening at 8080'); // eslint-disable-line no-console
  });
});