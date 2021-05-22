import { Router } from "express";
import {
  root,
  userSignup,
  userLogin,
  driverLogin,
  driverSignup,
  createSubscriptionPending,
  getSubscriptions,
} from "./controllers/index.js";

export const router = Router();

router.get("/", root);

router.post("/user/login", userLogin);
router.post("/user/signup", userSignup);
router.get("/user/subscriptions", getSubscriptions);
router.post("/user/subscription", createSubscriptionPending);

router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
// router.get("/user/subscription/matched", subscriptionPending);
// router.post("/user/subscription/matched", subscriptionPending);
// router.post("/driver/subscription/pending", subscriptionPending);
