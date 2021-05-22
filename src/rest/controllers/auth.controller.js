import { createUser } from "../../services/auth/createUser.js";
import { findUserByEmail } from "../../services/auth/findUserByEmail.js";
import { userLogin as userLoginServiceFunc } from "../../services/auth/userLogin.js";
import { createDriver } from "../../services/auth/createDriver.js";
import { findDriverByEmail } from "../../services/auth/findDriverByEmail.js";
import { driverLogin as driverLoginServiceFunc } from "../../services/auth/driverLogin.js";
import pkg from "mongoose";
const { Error: MongooseError } = pkg;

export const userSignup = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  if (!name || !email || !password || !phoneNumber) {
    return res.sendStatus(400);
  }

  const isExist = await findUserByEmail(email);
  if (isExist) return res.sendStatus(409);

  const userInfo = { name, email, phoneNumber, password };
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

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(400);
  }

  try {
    const user = await userLoginServiceFunc(email, password);
    return res.send({ ...user._doc });
  } catch (err) {
    if (err.message === "authorization is failed") {
      return res.sendStatus(400);
    }
    return res.sendStatus(500);
  }
};

export const driverSignup = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  if (!name || !email || !password || !phoneNumber) {
    return res.sendStatus(400);
  }

  const isExist = await findDriverByEmail(email);
  if (isExist) return res.sendStatus(409);

  const driverInfo = { name, email, phoneNumber, password };
  try {
    await createDriver(driverInfo);
    return res.sendStatus(200);
  } catch (err) {
    if (err instanceof MongooseError.ValidationError) {
      return res.sendStatus(400);
    }
    return res.sendStatus(500);
  }
};

export const driverLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(400);
  }

  try {
    const driver = await driverLoginServiceFunc(email, password);
    return res.send({ ...driver._doc });
  } catch (err) {
    if (err.message === "authorization is failed") {
      return res.sendStatus(400);
    }
    return res.sendStatus(500);
  }
};
