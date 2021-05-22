import { Driver } from "../../models/DriverModel.js";

export const createDriver = async (driverInfo) => {
  /**
   * @params {Object} driverInfo - 유저 정보가 담긴 오브젝트
   * @params {string} driverInfo.name - 이름
   * @params {string} driverInfo.email - 이메일
   * @params {string} driverInfo.phoneNumber - 휴대폰 번호
   * @params {string} driverInfo.password - 비밀번호
   */
  const doc = new Driver(driverInfo);
  const driver = await doc.save();
  return driver;
};
