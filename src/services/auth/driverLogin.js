import { Driver } from "../../models/DriverModel.js";

export const driverLogin = async (email, password) => {
  /**
   * @params {string} email - 이메일
   * @params {string} password - 비밀번호
   */
  const isVerified = await Driver.verify(email, password);
  if (isVerified) {
    return await Driver.findByEmail(email);
  }
  throw new Error("authorization is failed");
};
