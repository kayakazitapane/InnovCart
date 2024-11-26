const Cart = require('../models/Cart');

// Get User's Cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId }).populate('cartItems.product');
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add Items to Cart
exports.addToCart = async (req, res) => {
    const { user, cartItems } = req.body;
    try {
        let cart = await Cart.findOne({ user });

        if (!cart) {
            cart = new Cart({ user, cartItems });
        } else {
            cart.cartItems.push(...cartItems);
        }

        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
