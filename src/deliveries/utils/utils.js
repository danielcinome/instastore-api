function getNextOpeningTime(storeOpeningTime, fromTime) {
  const [openingHour, openingMinute] = storeOpeningTime.split(":");
  const nextOpeningTime = new Date(fromTime);

  // Adjust the date to the next day
  nextOpeningTime.setUTCDate(nextOpeningTime.getUTCDate() + 1);

  // Set the opening time
  nextOpeningTime.setUTCHours(openingHour, openingMinute, 0, 0);

  return nextOpeningTime;
}

module.exports = getNextOpeningTime;
