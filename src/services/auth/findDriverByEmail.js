import { Driver } from "../../models/DriverModel.js";

export const findDriverByEmail = async (email) => {
  /**
   * @params {string} email - 이메일
   */
  const driver = await Driver.findByEmail(email);
  return driver;
};
