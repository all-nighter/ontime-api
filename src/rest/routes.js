import { Router } from "express";
import {
  root,
  userSignup,
  userLogin,
  driverLogin,
  driverSignup,
  createSubscriptionPending,
  getSubscriptionPendings,
} from "./controllers/index.js";

export const router = Router();

router.get("/", root);
router.post("/user/login", userLogin);
router.post("/user/signup", userSignup);
router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
router.get("/user/subscription/pending", getSubscriptionPendings);
router.post("/user/subscription/pending", createSubscriptionPending);
// router.get("/user/subscription/matched", subscriptionPending);
// router.post("/user/subscription/matched", subscriptionPending);
// router.post("/driver/subscription/pending", subscriptionPending);
