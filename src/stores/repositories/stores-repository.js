const { DataTypes } = require("sequelize");

class StoresRepository {
  constructor(sequelizeClient, test = false) {
    this.sequelizeClient = sequelizeClient;
    this.test = test;

    let tablename = "stores";

    if (this.test) {
      tablename += "_test";
    }

    const columns = {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      openingTime: DataTypes.STRING,
      closingTime: DataTypes.STRING,
      deliveryInterval: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    };

    const options = {
      tableName: tablename,
      timestamps: true,
    };

    this.storeModel = sequelizeClient.sequelize.define(
      "store",
      columns,
      options,
    );
  }

  async getAllStores() {
    const stores = await this.storeModel.findAll({
      raw: true,
    });
    return stores;
  }
}

module.exports = StoresRepository;
