import express from "express";
import bodyParser from "body-parser";
import { router } from "./rest/routes.js";

export function createApp() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(router);

  return app;
}
