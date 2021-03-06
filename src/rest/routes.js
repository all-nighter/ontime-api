import { Router } from "express";
import {
  root,
  userSignup,
  userLogin,
  driverLogin,
  driverSignup,
  createSubscriptionPending,
  userSubscriptionList,
  driverSubscriptionList,
  approveSubscription,
  unsubscribedList,
} from "./controllers/index.js";

export const router = Router();

router.get("/", root);
router.post("/user/login", userLogin);
router.post("/user/signup", userSignup);
router.get("/user/subscriptions", userSubscriptionList);
router.post("/user/subscription", createSubscriptionPending);

router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
router.get("/driver/schedules", driverSubscriptionList);
router.get("/driver/job-list", unsubscribedList);
router.post("/driver/approve-schedule", approveSubscription);
