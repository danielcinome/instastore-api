const createExpressApp = require("./frameworks/http/express");
const SequelizeClient = require("./frameworks/db/sequelize");

// Import the stores module
const StoresRepository = require("./stores/repositories/stores-repository");
const ManageStoresUsecase = require("./stores/usecases/manage-stores-usecase");
const createStoresRouter = require("./stores/routers/stores-router");

// Import the deliveries module
const DeliveriesRepository = require("./deliveries/repositories/deliveries-repository");
const ManageDeliveriesUsecase = require("./deliveries/usecases/manage-deliveries-usecase");

// Sync the database with Sequelize ORM models before starting the application
const sequelizeClient = new SequelizeClient();
sequelizeClient.syncDatabase();

// Create the dependencies for the deliveries module
const deliveriesRepository = new DeliveriesRepository(sequelizeClient);
const manageDeliveriesUsecase = new ManageDeliveriesUsecase(
  deliveriesRepository,
);

// Create the dependencies for the stores module
const storesRepository = new StoresRepository(sequelizeClient);
const manageStoresUsecase = new ManageStoresUsecase(
  storesRepository,
  manageDeliveriesUsecase,
);

// Create the routers for the application
let routers = [createStoresRouter(manageStoresUsecase)];

// Create Express application with injected dependencies.
const app = createExpressApp(routers);
