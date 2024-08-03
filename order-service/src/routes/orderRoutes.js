import express from "express";

import orderController from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", orderController.createOrder);

export default orderRouter;