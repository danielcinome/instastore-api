class DeliveriesSchema {
  static schema = {
    type: "object",
    properties: {
      id: { type: "string", errorMessage: "must be of string type" },
      storeId: { type: "string", errorMessage: "must be of string type" },
      orderId: { type: "string", errorMessage: "must be of string type" },
      deliveryLatitude: {
        type: "number",
        errorMessage: "must be of number type",
      },
      deliveryLongitude: {
        type: "number",
        errorMessage: "must be of number type",
      },
      deliveryTime: { type: "string", errorMessage: "must be of string type" },
      status: { type: "string", errorMessage: "must be of string type" },

      createdAt: { type: "string", errorMessage: "must be of string type" },
      updatedAt: { type: "string", errorMessage: "must be of string type" },
      deletedAt: { type: "string", errorMessage: "must be of string type" },
    },
    required: [
      "orderId",
      "storeId",
      "deliveryLatitude",
      "deliveryLongitude",
      "deliveryTime",
      "status",
    ],
    additionalProperties: false,
  };

  constructor(
    id,
    storeId,
    orderId,
    deliveryLatitude,
    deliveryLongitude,
    deliveryTime,
    status,
    createdAt,
    updatedAt,
    deletedAt,
  ) {
    this.id = id;
    this.storeId = storeId;
    this.orderId = orderId;
    this.deliveryLatitude = deliveryLatitude;
    this.deliveryLongitude = deliveryLongitude;
    this.deliveryTime = deliveryTime;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}

module.exports = DeliveriesSchema;
