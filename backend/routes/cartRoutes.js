const express = require('express');
const { getCart, addToCart } = require('../controllers/cartController');
const { protect } = require('../middleware/userMiddleware');
const router = express.Router();

router.get('/:userId', protect, getCart);
router.post('/', protect, addToCart);

module.exports = router;
