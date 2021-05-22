import { Subscription } from "../../models/SubscriptionModel.js";

export const getDriverSubscriptions = async (driverId) => {
  /**
   * @required
   * @params {string} input.driverId - 드라이버 아이디
   */
  return await Subscription.find({
    driver: driverId,
  }).populate("user");
};
