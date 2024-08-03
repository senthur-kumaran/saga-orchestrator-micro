import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    product: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    status: {
        type: String,
        default: 'pending',
    },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;