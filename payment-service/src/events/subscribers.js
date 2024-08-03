import paymentService from "../services/paymentService.js";
import createBroker from "../utils/broker.js";

const paymentProcess = async (broker) => {
    try {
        const subscription = await broker.subscribe('paymentProcess');

        subscription.on('message', async (_message, content, ackOrNack) => {
            console.log("listen -> paymentProcess", content);
            try {
                await paymentService.createPayment(content);
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
};

const subscribeTo = async () => {
    const broker = await createBroker();
    // Create a subscription for updating order status
    await paymentProcess(broker);
};

export default subscribeTo;