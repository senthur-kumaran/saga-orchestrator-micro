import createBroker from "../utils/broker.js";

const orderCreated = async(broker) => {
    try {
        const subscription = await broker.subscribe('orderCreated');

        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> orderCreated", content);
            try {
                await broker.publish('paymentProcess', content);
                console.log("publish -> paymentProcess", content);
            } catch (error) {
                console.error('Error publishing message:', error);
            }
            ackOrNack();
        });
    } catch (error) {
        console.error('Error subscribing to message:', error);
    }
};

const paymentSuccess = async(broker) => {
    try {
        const subscription = await  broker.subscribe('paymentSuccess');

        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> paymentSuccess",content);
            try {
                await broker.publish('orderStatusUpdate', content);
                console.log("publish -> orderStatusUpdate", content);
            } catch (error) {
                console.error('Error publishing message:', error);
            }
            ackOrNack();
        });
    } catch (error) {
        console.error('Error subscribing to message:', error);
    }
};

const paymentFailure = async(broker) => {
    try {
        const subscription = await broker.subscribe('paymentFailure');

        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> paymentSuccess", content);
            try {
                await broker.publish('orderCompensate', { orderId: content.orderId });
                console.log("publish -> orderCompensate", { orderId: content.orderId });
            } catch (error) {
                console.error('Error publishing message:', error);
            }
            ackOrNack();
        });
    } catch (error) {
        console.error('Error subscribing to message:', error);
    }
}

const subscribeTo = async () => {
    const broker = await createBroker();

    await orderCreated(broker);

    await paymentSuccess(broker);

    await paymentFailure(broker);
};

export default subscribeTo;