import { Subscription } from "../../models/SubscriptionModel.js";

export const getFulfilledSubscriptions = async (userId) => {
  /**
   * @required
   * @params {string} input.userId - 유저 아이디
   */
  const subscribed = await Subscription.find({
    user: userId,
    driver: { $ne: null },
  }).populate("driver");
  return subscribed;
};
