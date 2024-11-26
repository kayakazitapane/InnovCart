const Order = require('../models/Order');

// Get All Orders for a User
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('orderItems.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create an Order
exports.createOrder = async (req, res) => {
    const { user, orderItems, totalPrice, status } = req.body;
    try {
        const order = new Order({ user, orderItems, totalPrice, status });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
