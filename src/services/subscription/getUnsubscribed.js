import { Subscription } from "../../models/SubscriptionModel.js";

export const getUnsubscribed = async () => {
  const unsubscribedList = await Subscription.find({ driver: null });
  return unsubscribedList;
};
