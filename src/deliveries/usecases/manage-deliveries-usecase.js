class ManageDeliveriesUsecase {
  constructor(deliveriesRepository) {
    this.deliveriesRepository = deliveriesRepository;
  }

  async calculateNextDeliveryTime(store, isStoreOpen, distanceToStoreKm) {
    try {
      const currentTime = new Date();
      const utcOffset = -5 * 60;
      currentTime.setMinutes(
        currentTime.getMinutes() + currentTime.getTimezoneOffset() + utcOffset,
      );

      const averageSpeed = 60; // In kilometers per hour
      const congestionFactor = 1.5; // Congestion factor for delivery time
      const freeTravelTimeInHours = distanceToStoreKm / averageSpeed; // Calculate free travel time in hours
      const freeTravelTimeInMinutes = freeTravelTimeInHours * 60;
      // Calculate total travel time
      const totalTravelTimeInMinutes =
        freeTravelTimeInMinutes * congestionFactor;

      // Get the last delivery for the store
      const lastDelivery =
        await this.deliveriesRepository.getLastDeliveryForStore(store.id);

      // if store is closed or current time is after closing time, schedule next delivery for next day
      if (!isStoreOpen) {
        const nextDeliveryTime = new Date(currentTime);
        nextDeliveryTime.setDate(nextDeliveryTime.getDate() + 1); // Siguiente día
        nextDeliveryTime.setUTCHours(
          store.openingTime.split(":")[0],
          store.openingTime.split(":")[1],
          0,
          0,
        );
        nextDeliveryTime.setMinutes(
          nextDeliveryTime.getMinutes() +
            totalTravelTimeInMinutes +
            store.deliveryInterval,
        );
        return nextDeliveryTime;
      } else {
        const nextDeliveryTime = new Date(currentTime);
        if (lastDelivery && lastDelivery.deliveryTime > nextDeliveryTime) {
          nextDeliveryTime = new Date(lastDelivery.deliveryTime);
        }
        nextDeliveryTime.setMinutes(
          nextDeliveryTime.getMinutes() +
            totalTravelTimeInMinutes +
            store.deliveryInterval,
        );
        return nextDeliveryTime;
      }
    } catch (error) {
      throw new Error("Error calculating next delivery time: " + error.message);
    }
  }
}

module.exports = ManageDeliveriesUsecase;
