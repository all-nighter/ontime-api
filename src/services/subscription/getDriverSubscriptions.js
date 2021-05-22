import { Subscription } from "../../models/SubscriptionModel.js";

export const getDriverSubscriptions = async (driverId) => {
  /**
   * @required
   * @params {string} input.driverId - 드라이버 아이디
   */
  const subscriptions = await Subscription.find({
    driver: driverId,
  });
  return subscriptions;
};
