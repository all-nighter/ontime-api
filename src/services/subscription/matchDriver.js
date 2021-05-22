import { Subscription } from "../../models/SubscriptionModel.js";

export const matchDriver = async (subscriptionId, driverId) => {
  /**
   * @params {string} subscriptionId - 구독 아이디
   * @params {string} driverId - 드라이버 아이디
   */
  const updated = await Subscription.updateOne(
    { _id: subscriptionId },
    { $set: { driver: driverId } }
  );
  return updated;
};
