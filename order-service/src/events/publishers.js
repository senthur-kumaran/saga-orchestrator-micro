import createBroker from "../utils/broker.js";

export const publishOrderCreated = async (orderId) => {
    const broker = await createBroker();
    try {
        await broker.publish("orderCreated", { orderId, amount: 1000 });
        console.log("publish -> orderCreated", { orderId, amount: 1000 });
    } catch (error) {
        console.error('Error publishing message:', error);
    }
};
