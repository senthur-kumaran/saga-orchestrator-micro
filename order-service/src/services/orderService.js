import { publishOrderCreated } from "../events/publishers.js";
import Order from "../models/order.js"

const createOrder = async (orderData) => {
    const order = await Order.create(orderData);
    const orderId = order._id.toString();

    console.log("Order is created successfully!", { orderId });

    await publishOrderCreated(orderId);

    return order;
};

const updateOrderStatus = async (orderId) => {
    await Order.findByIdAndUpdate(orderId, { status: "success" }, { new: true });

    console.log("Order status is updated successfully!", { orderId });
};

const deleteOrder = async (orderId) => {
    await Order.deleteOne({ _id: orderId });

    console.log("Order is deleted successfully!", { orderId });
}

export default {
    createOrder,
    updateOrderStatus,
    deleteOrder
};