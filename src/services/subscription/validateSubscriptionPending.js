export const validateSubscriptionPending = (input) => {
  /**
   * @params {string} input.email - 유저 이메일
   * @params {string} input.departure - 출발지
   * @params {string} input.departureLocationPoint - 출발지 좌표
   * @params {string} input.destination - 도착지
   * @params {string} input.destinationLocationPoint - 도착지 좌표
   * @params {string} input.subscriptionWeeks - 구독 기간 - X
   * @params {Array<number>} input.frequencyOfWeek - 탑승 빈도
   * @params {string} input.hour - 시
   * @params {string} input.minute - 분
   */
  input = mapper(input);
  if (
    !input.email ||
    !input.departure ||
    !input.departureLocationPoint ||
    !input.destination ||
    !input.destinationLocationPoint ||
    // !input.subscriptionWeeks ||
    !input.frequencyOfWeek ||
    !input.hour ||
    !input.minute ||
    input.estimatedTimeSeconds === null ||
    input.estimatedTimeSeconds === undefined
  ) {
    return false;
  }
  return { ...input };
};

const mapper = (input) => {
  const [hour, minute] = input.time.split(":");
  return {
    email: input.email,
    departure: input.startAddress,
    destination: input.destAddress,
    departureLocationPoint: input.startCoordinates,
    destinationLocationPoint: input.destCoordinates,
    frequencyOfWeek: input.frequencyOfWeek,
    hour,
    minute,
    driver: input.driver,
    estimatedTimeSeconds: input.estimatedTimeSeconds,
  };
};
