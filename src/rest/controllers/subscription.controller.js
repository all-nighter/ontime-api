import { validateSubscriptionPending } from "../../services/subscription/validateSubscriptionPending.js";
import { findUserByEmail } from "../../services/auth/findUserByEmail.js";
import { findDriverByEmail } from "../../services/auth/findDriverByEmail.js";
import { createSubscription } from "../../services/subscription/createSubscription.js";
import { getPendingSubscriptions } from "../../services/subscription/getPendingSubscriptions.js";
import { getFulfilledSubscriptions } from "../../services/subscription/getFulfilledSubscriptions.js";
import { getDriverSubscriptions } from "../../services/subscription/getDriverSubscriptions.js";
import { matchDriver } from "../../services/subscription/matchDriver.js";
import { getUnsubscribed } from "../../services/subscription/getUnsubscribed.js";

export const createSubscriptionPending = async (req, res) => {
  const validated = validateSubscriptionPending({ ...req.body });
  if (!validated) return res.sendStatus(400);
  const { email } = validated;

  const user = await findUserByEmail(email);
  if (!user) return res.sendStatus(401);

  try {
    const doc = await createSubscription({
      ...validated,
      user: user._id,
    });
    return res.send({ ...doc });
  } catch (err) {
    return res.sendStatus(500);
  }
};

export const userSubscriptionList = async (req, res) => {
  const { email } = req.query;
  const user = await findUserByEmail(email);
  if (!user) return res.sendStatus(401);
  const unsubscribed = await getPendingSubscriptions(user._id);
  const subscribed = await getFulfilledSubscriptions(user._id);
  res.send({ unsubscribed, subscribed });
};

export const driverSubscriptionList = async (req, res) => {
  const { email } = req.query;
  const driver = await findDriverByEmail(email);
  if (!driver) return res.sendStatus(401);
  const subscriptions = await getDriverSubscriptions(driver._id);
  return res.send({ subscriptions });
};

export const approveSubscription = async (req, res) => {
  const { subscriptionId, email } = req.body;
  const driver = await findDriverByEmail(email);
  if (!driver) return res.sendStatus(401);
  const status = await matchDriver(subscriptionId, driver._id);
  if (!status.ok) return res.sendStatus(400);
  return res.sendStatus(200);
};

export const unsubscribedList = async (req, res) => {
  const unsubscribedList = await getUnsubscribed();
  return res.send({ unsubscribedList });
};
