import orderService from "../services/orderService.js";
import createBroker from "../utils/broker.js";

const OrderStatusUpdate = async (broker) => {
    try {
        const subscription = await broker.subscribe('orderStatusUpdate');

        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> orderStatusUpdate", content);
            try {
                await orderService.updateOrderStatus(content.orderId);
                ackOrNack();
            } catch (err) {
                console.error(err);
                ackOrNack(err);
            }
        });
        subscription.on('error', (err) => {
            console.error(err);
            process.exit(1);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const orderCompensate = async (broker) => {
    try {
        const subscription = await broker.subscribe('orderCompensate');
        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> orderCompensate", content);
            try {
                await orderService.deleteOrder(content.orderId);
                ackOrNack();
            } catch (err) {
                console.error(err);
                ackOrNack(err);
            }
        });
        subscription.on('error', (err) => {
            console.error(err);
            process.exit(1);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const subscribeTo = async () => {
    const broker = await createBroker();

    // Create a subscription for updating order status
    await OrderStatusUpdate(broker);
    // Create a subscription for reverting order creation
    await orderCompensate(broker);
};

export default subscribeTo;
