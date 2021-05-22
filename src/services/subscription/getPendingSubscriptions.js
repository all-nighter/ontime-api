import { Subscription } from "../../models/SubscriptionModel.js";

export const getPendingSubscriptions = async (userId) => {
  /**
   * @required
   * @params {string} input.userId - 유저 아이디
   */
  const unsubscribed = await Subscription.find({ user: userId, driver: null });
  return unsubscribed;
};
