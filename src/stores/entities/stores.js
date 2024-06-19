//  findNearestStore
class StoresSchema {
  static schema = {
    type: "object",
    properties: {
      id: { type: "string", errorMessage: "must be of string type" },
      name: { type: "string", errorMessage: "must be of string type" },
      openingTime: { type: "string", errorMessage: "must be of string type" },
      closingTime: { type: "string", errorMessage: "must be of string type" },
      deliveryInterval: {
        type: "integer",
        errorMessage: "must be of integer type",
      },
      latitude: { type: "number", errorMessage: "must be of number type" },
      longitude: { type: "number", errorMessage: "must be of number type" },
      createdAt: { type: "string", errorMessage: "must be of string type" },
      updatedAt: { type: "string", errorMessage: "must be of string type" },
    },
    required: [
      "name",
      "openingTime",
      "closingTime",
      "deliveryInterval",
      "latitude",
      "longitude",
    ],
    additionalProperties: false,
  };

  constructor(
    id,
    name,
    openingTime,
    closingTime,
    deliveryInterval,
    latitude,
    longitude,
    createdAt,
    updatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.deliveryInterval = deliveryInterval;
    this.latitude = latitude;
    this.longitude = longitude;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class findNearestStore {
  static schema = {
    type: "object",
    properties: {
      latitude: { type: "number", errorMessage: "must be of number type" },
      longitude: { type: "number", errorMessage: "must be of number type" },
    },
    required: ["latitude", "longitude"],
    additionalProperties: false,
  };

  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

module.exports = { StoresSchema, findNearestStore };
