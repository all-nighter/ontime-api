import { PORT } from "./env.js";
import { createApp } from "./app.js";
import { connectMongoose } from "./connectMongoose.js";

async function init() {
  const app = createApp();
  await connectMongoose();

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
}

init();
