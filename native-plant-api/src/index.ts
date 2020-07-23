import express from "express";
import { connectToDb } from "./connectToDb";
import routes from "./routes";
import cors from "cors";

const app = express();
const PORT = 3001;

const initApp = async () => {
  // bodyparser setup
  app.use(cors());
  app.use(express.json());
  app.options("*", cors());
  await connectToDb();
  app.use(express.static("public"));
  routes.forEach((route) => {
    route(app);
  });
  app.get("/", (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
  );

  app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
};

initApp();
