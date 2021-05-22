import { Router } from "express";
import {
  root,
  userSignup,
  userLogin,
  driverLogin,
  driverSignup,
  createSubscriptionPending,
  getUserSubscriptions,
  getDriverSubscriptions,
  approveSubscription,
} from "./controllers/index.js";

export const router = Router();

router.get("/", root);

router.post("/user/login", userLogin);
router.post("/user/signup", userSignup);
router.get("/user/subscriptions", getUserSubscriptions);
router.post("/user/subscription", createSubscriptionPending);

router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
router.get("/driver/subscriptions", getDriverSubscriptions);
router.post("/driver/subscription", approveSubscription);
