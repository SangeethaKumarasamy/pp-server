import express from "express";
import { mongo } from "./mongo.js";
import cors from "cors";
import dotenv from "dotenv";
import { route as detailsRoute } from "./routes/details.routes.js";

(async () => {
  try {
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 7000;

    app.use(express.json());
    app.use(cors());

    // MongoDB collection
    await mongo.connect();

    app.use("/details", detailsRoute);

    app.get("/", (req, res) => {
      res.send(`<h1 style="text-align: center" >APPLICANTS DETAILS</h1>`);
    });

    app.listen(PORT, () => console.log("Server running at 7000"));
  } catch (error) {
    console.error("Error starting app");
  }
})();
