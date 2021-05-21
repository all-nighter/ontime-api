import { createUser } from "../../services/auth/createUser.js";
import { findByEmail } from "../../services/auth/findByEmail.js";
import pkg from "mongoose";
const { Error: MongooseError } = pkg;

export const signup = async (req, res) => {
  const { name, email, age, password } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(400);
  }

  const isExist = await findByEmail(email);
  if (isExist) return res.sendStatus(409);

  const userInfo = { name, email, age, password };
  try {
    await createUser(userInfo);
    return res.sendStatus(200);
  } catch (err) {
    if (err instanceof MongooseError.ValidationError) {
      return res.sendStatus(400);
    }
    return res.sendStatus(500);
  }
};
