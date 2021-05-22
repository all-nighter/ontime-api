import { validateSubscriptionPending } from "../../services/subscription/validateSubscriptionPending.js";
import { findUserByEmail } from "../../services/auth/findUserByEmail.js";
import { createSubscription } from "../../services/subscription/createSubscription.js";
import { getPendingSubscriptions } from "../../services/subscription/getPendingSubscriptions.js";
import { getFulfilledSubscriptions } from "../../services/subscription/getFulfilledSubscriptions.js";

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

export const getUserSubscriptions = async (req, res) => {
  const { email } = req.query;
  const user = await findUserByEmail(email);
  if (!user) return res.sendStatus(401);
  const unsubscribed = await getPendingSubscriptions(user._id);
  const subscribed = await getFulfilledSubscriptions(user._id);
  res.send({ unsubscribed, subscribed });
};
