import { validateSubscriptionPending } from "../../services/subscription/validateSubscriptionPending.js";
import { findUserByEmail } from "../../services/auth/findUserByEmail.js";
import { createSubscription } from "../../services/subscription/createSubscription.js";

export const createSubscriptionPending = async (req, res) => {
  const validated = validateSubscriptionPending({ ...req.body });
  if (!validated) return res.sendStatus(400);
  const { email } = validated;

  const user = await findUserByEmail(email);
  if (!user) return res.sendStatus(400);

  try {
    await createSubscription({ ...validated, user: user._id });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};

export const getSubscriptionPendings = async (req, res) => {};
