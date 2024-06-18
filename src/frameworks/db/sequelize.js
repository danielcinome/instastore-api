const { Sequelize } = require('sequelize');

class SequelizeClient {
  constructor() {
        
    const dialect = 'mysql';
    const username = 'root';
    const password = 'root';

    const database = process.env.SEQUELIZE_DATABASE || 'instastore';
    const host = process.env.SEQUELIZE_HOST || 'instastore-mysql';

    this.sequelize = new Sequelize(database, username, password, {
      host: host,
      dialect: dialect,
      logging: false
    });
  }

  syncDatabase() {

    let syncOptions = {
      alter: false
    };

    this.sequelize.sync(syncOptions)
      .then(() => {
        console.log('Database synchronized');
      })
      .catch((err) => {
        console.log('An error occurred while synchronizing the database');
        console.log(err);
      });
  }
}

module.exports = SequelizeClient;