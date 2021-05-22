import { Subscription } from "../../models/SubscriptionModel.js";

export const getUnsubscribed = async () => {
  return await Subscription.find({ driver: null }).populate("user");
};
