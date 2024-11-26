const express = require('express');
const { getUserOrders, createOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/userMiddleware');
const router = express.Router();

router.get('/:userId', protect, getUserOrders);
router.post('/', protect, createOrder);

module.exports = router;
