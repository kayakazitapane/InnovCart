const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', OrderSchema);
