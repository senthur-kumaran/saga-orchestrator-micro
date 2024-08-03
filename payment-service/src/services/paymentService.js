import { publishPaymentCreated, publishPaymentCreationFailed } from "../events/publishers.js";
import Payment from "../models/payment.js"

const createPayment = async (paymentData) => {
    try {
        const payment = await Payment.create(paymentData);

        console.log("payment is created successfully!", { paymentId: payment._id });

        await publishPaymentCreated(paymentData.orderId);
    } catch (error) {
        console.log("payment creation is failed!", error);

        await publishPaymentCreationFailed(paymentData.orderId);
    }

};

export default {
    createPayment,
};