import express from "express";
import 'dotenv/config'

import connectDB from "./config/db.js";
import config from "./config/config.js";
import subscribeTo from "./events/subscribers.js";

const { port } = config;

const app = express();
app.use(express.json());

subscribeTo();
connectDB();

app.listen(port, () => {
    console.log('Order service is started successfully on port: ', port);
});