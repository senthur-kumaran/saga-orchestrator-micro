import createBroker from "../utils/broker.js";

export const publishPaymentCreated = async (orderId) => {
    const broker = await createBroker();
    try {
        await broker.publish("paymentSuccess", { orderId });
        console.log("publish -> paymentSuccess", { orderId });
    } catch (error) {
        console.error('Error publishing message:', error);
    }
};

export const publishPaymentCreationFailed = async(orderId) => {
    const broker = await createBroker();
    try {
        await broker.publish("paymentFailure", { orderId });
        console.log("publish -> paymentFailure", { orderId });
    } catch (error) {
        console.error('Error publishing message:', error);
    }
};