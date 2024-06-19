const { DataTypes, Op } = require("sequelize");

class DeliveriesRepository {
  constructor(sequelizeClient, test = false) {
    this.sequelizeClient = sequelizeClient;
    this.test = test;

    let tablename = "deliveries";

    if (this.test) {
      tableName += "_test";
    }

    const columns = {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      storeId: DataTypes.UUID,
      orderId: DataTypes.UUID,
      deliveryLatitude: DataTypes.FLOAT,
      deliveryLongitude: DataTypes.FLOAT,
      deliveryTime: DataTypes.DATE,
      status: DataTypes.STRING,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    };

    const options = {
      tableName: tablename,
      timestamps: true,
    };

    this.deliveryModel = sequelizeClient.sequelize.define(
      "delivery",
      columns,
      options,
    );
  }

  async getLastDeliveryForStore(storeId) {
    return await this.deliveryModel.findOne({
      where: {
        storeId,
      },
      order: [["deliveryTime", "DESC"]],
    });
  }
}

module.exports = DeliveriesRepository;
