import { User } from "../../models/UserModel.js";

export const createUser = async (userInfo) => {
  /**
   * @params {Object} userInfo - 유저 정보가 담긴 오브젝트
   * @params {string} userInfo.name - 이름
   * @params {string} userInfo.email - 이메일
   * @params {number} userInfo.age - 나이
   * @params {string} userInfo.password - 비밀번호
   */
  const doc = new User(userInfo);
  const user = await doc.save();
  return user;
};
