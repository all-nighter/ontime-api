import { Subscription } from "../../models/SubscriptionModel.js";

export const createSubscription = async (input) => {
  /**
   * @required
   * @params {string} input.user - 유저 아이디
   * @params {string} input.departure - 출발지
   * @params {string} input.departureLocationPoint - 출발지 좌표
   * @params {string} input.destination - 도착지
   * @params {string} input.destinationLocationPoint - 도착지 좌표
   * @params {string} input.subscriptionWeeks - 구독 기간
   * @params {Array<number>} input.frequencyOfWeek - 탑승 빈도
   * @params {string} input.hour - 시
   * @params {string} input.minute - 분
   *
   * @optional
   * @params {number} input.numberOfPassengers - 탑승 교통약자 수
   * @params {number} input.numberOfPassengers - 탑승 보호자 수
   */
  const doc = new Subscription(input);
  const subscription = await doc.save();
  return subscription;
};
