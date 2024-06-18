const createExpressApp = require('./frameworks/http/express');
const SequelizeClient = require('./frameworks/db/sequelize');


// Sync the database with Sequelize ORM models before starting the application
const sequelizeClient = new SequelizeClient();
sequelizeClient.syncDatabase();


// Create the routers for the application
let routers = [
    
];

// Create Express application with injected dependencies.
const app = createExpressApp(routers);