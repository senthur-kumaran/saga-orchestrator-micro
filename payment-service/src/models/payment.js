import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    orderId: {
        type: mongoose.ObjectId,
    },
    amount: {
        type: Number,
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;