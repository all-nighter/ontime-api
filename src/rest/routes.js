import { Router } from "express";
import { root, signup } from "./controllers/index.js";

export const router = Router();

router.get("/", root);
router.post("/signup", signup);
