import dotenv from "dotenv";
import env from "env-var";

dotenv.config();
export const PORT = env.get("PORT").required().asPortNumber();
export const MONGODB_HOST = env.get("MONGODB_HOST").required().asString();
