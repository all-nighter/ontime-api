export const createSubscriptionPendingMapper = (doc) => {
  return {
    _id: doc._id,
    startAddress: doc.departure,
    destAddress: doc.destination,
    startCoordinates: doc.departureLocationPoint,
    destCoordinates: doc.destinationLocationPoint,
    time: `${doc.hour}:${doc.minute}`,
    frequencyOfWeek: doc.frequencyOfWeek,
    user: doc.user,
  };
};
