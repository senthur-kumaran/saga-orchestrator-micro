import express from "express";
import "dotenv/config";

import config from "./config/config.js";
import subscribeTo from "./events/subscribers.js";

const { port } = config;

const app = express();

subscribeTo();

app.listen(port, () => {
    console.log("Saga orchestrator is running successfully on port", port);
})