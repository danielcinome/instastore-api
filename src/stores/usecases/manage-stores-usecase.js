const haversine = require("haversine-distance");
const isStoreOpen = require("../utils/utils");

class ManageStoresUsecase {
  constructor(storesRepository, manageDeliveriesUsecase) {
    this.storesRepository = storesRepository;
    this.manageDeliveriesUsecase = manageDeliveriesUsecase;
  }

  async findNearestStore(latitude, longitude) {
    const stores = await this.storesRepository.getAllStores();

    let nearestStore = null;
    let shortestDistance = Infinity;
    const radiusDistance = 10; // km radius
    try {
      stores.forEach((store) => {
        const storeLocation = {
          latitude: store.latitude,
          longitude: store.longitude,
        };
        const clientLocation = { latitude, longitude };
        const distance = haversine(clientLocation, storeLocation) / 1000; // Convert to kilometers

        if (distance < radiusDistance && distance < shortestDistance) {
          shortestDistance = distance;
          nearestStore = store;
        }
      });

      if (!nearestStore) {
        return {
          message: "No se encontraron tiendas disponibles en tu dirección",
        };
      }

      if (nearestStore) {
        const isOpen = isStoreOpen(
          nearestStore.openingTime,
          nearestStore.closingTime,
        );
        const nextDeliveryTime =
          await this.manageDeliveriesUsecase.calculateNextDeliveryTime(
            nearestStore,
            isOpen,
            shortestDistance,
          );

        return {
          storeId: nearestStore.id,
          storeName: nearestStore.name,
          isOpen: isOpen,
          coordinates: {
            latitude: nearestStore.latitude,
            longitude: nearestStore.longitude,
          },
          nextDeliveryTime: nextDeliveryTime,
        };
      }
    } catch (error) {
      throw new Error("Error finding nearest store: " + error.message);
    }
  }
}

module.exports = ManageStoresUsecase;
