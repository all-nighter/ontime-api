export const validateSubscriptionPending = (input) => {
  /**
   * @params {string} input.email - 유저 이메일
   * @params {string} input.departure - 출발지
   * @params {string} input.departureLocationPoint - 출발지 좌표
   * @params {string} input.destination - 도착지
   * @params {string} input.destinationLocationPoint - 도착지 좌표
   * @params {string} input.subscriptionWeeks - 구독 기간
   * @params {Array<number>} input.frequencyOfWeek - 탑승 빈도
   * @params {string} input.hour - 시
   * @params {string} input.minute - 분
   */
  if (
    !input.email ||
    !input.departure ||
    !input.departureLocationPoint ||
    !input.destination ||
    !input.destinationLocationPoint ||
    !input.subscriptionWeeks ||
    !input.frequencyOfWeek ||
    !input.hour ||
    !input.minute
  ) {
    return false;
  }
  return { ...input };
};