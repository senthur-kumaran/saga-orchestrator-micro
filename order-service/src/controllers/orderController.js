import asyncHandler from "../middleware/asyncHandler.js";
import orderService from "../services/orderService.js";

const createOrder = asyncHandler(async (req, res) => {
    const result = await orderService.createOrder(req.body);

    res.status(201).json(result);
});

export default {
    createOrder,
};