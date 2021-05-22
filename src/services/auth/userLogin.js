import { User } from "../../models/UserModel.js";

export const userLogin = async (email, password) => {
  /**
   * @params {string} email - 이메일
   * @params {string} password - 비밀번호
   */
  const isVerified = await User.verify(email, password);
  if (isVerified) {
    return await User.findByEmail(email);
  }
  throw new Error("authorization is failed");
};
