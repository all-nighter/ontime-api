import express from "express";
import bodyParser from "body-parser";
import { router } from "./rest/routes.js";
import cors from "cors";

export function createApp() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(router);

  return app;
}
