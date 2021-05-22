import { User } from "../../models/UserModel.js";

export const findUserByEmail = async (email) => {
  /**
   * @params {string} userInfo.email - 이메일
   */
  const user = await User.findByEmail(email);
  return user;
};
