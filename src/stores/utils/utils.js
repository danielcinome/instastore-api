// Function to check if a store is open
// The function receives the opening and closing times of the store
// and returns a boolean indicating if the store is open

function isStoreOpen(storeOpeningTime, storeClosingTime) {
  const currentTime = new Date();
  const utcOffset = -5 * 60; // UTC-5 in minutes

  const openingTime = new Date();
  const closingTime = new Date();

  const [openingHour, openingMinute] = storeOpeningTime.split(":");
  const [closingHour, closingMinute] = storeClosingTime.split(":");

  // Setting opening and closing times
  openingTime.setUTCHours(openingHour, openingMinute, 0, 0);
  closingTime.setUTCHours(closingHour, closingMinute, 0, 0);

  // Adjusting the current time to UTC-5
  currentTime.setMinutes(
    currentTime.getMinutes() + currentTime.getTimezoneOffset() + utcOffset,
  );

  return currentTime >= openingTime && currentTime <= closingTime;
}

module.exports = isStoreOpen;
