const express = require('express');

// Module to create an application in Express
// receiving the dependencies externally.

async function createExpressApp(routers) {

  let app = express();

  app.use(express.json());

  // Use routes received.
  for (let router of routers) {
    app.use(router);
  }

  // Port
  const port = process.env.INSTASTORE_APP_PORT;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  return app;

}

module.exports = createExpressApp