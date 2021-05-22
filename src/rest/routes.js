import { Router } from "express";
import {
  root,
  userSignup,
  userLogin,
  driverLogin,
  driverSignup,
} from "./controllers/index.js";

export const router = Router();

router.get("/", root);
router.post("/user/login", userLogin);
router.post("/user/signup", userSignup);
router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
