import { User } from "../../models/UserModel.js";

export const findByEmail = async (email) => {
  /**
   * @params {string} userInfo.email - 이메일
   */
  const user = await User.findByEmail(email);
  return user;
};
