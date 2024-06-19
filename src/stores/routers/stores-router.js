const express = require("express");
const { findNearestStore } = require("../entities/stores");
const appRoot = require("app-root-path");
const validateSchema = require(appRoot + "/src/frameworks/http/ajv");
const logger = require(appRoot + "/src/utils/winston");

function createStoresRouter(manageStoresUsecase) {
  const router = express.Router();

  router.get("/findNearestStore", async (req, res) => {
    logger.info(
      `GET request received on /findNearestStore with query params: ${JSON.stringify(req.query)}`,
    );

    // Convert query parameters to the correct types
    const query = {
      latitude: parseFloat(req.query.latitude),
      longitude: parseFloat(req.query.longitude),
    };

    // Validate the query parameters
    const validation = validateSchema(findNearestStore.schema, query);

    if (validation === true) {
      try {
        const result = await manageStoresUsecase.findNearestStore(
          query.latitude,
          query.longitude,
        );

        // If there is a message, return a 404 status code if there is no store found
        if (result.message) {
          logger.info(`No store found - statuscode: 404`);
          return res.status(404).json({ message: result.message });
        }

        logger.info(`Nearest store found - statuscode: 200`);
        res.status(200).json(result);
      } catch (error) {
        logger.error(`Error fetching nearest store: ${error.message}`);
        res.status(500).json({
          message: "Internal server error",
          code: 500,
        });
      }
    } else {
      logger.warn(`Invalid query parameters: ${JSON.stringify(validation)}`);
      res.status(422).send(validation);
    }
  });

  return router;
}

module.exports = createStoresRouter;
