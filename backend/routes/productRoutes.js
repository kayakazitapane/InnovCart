const express = require('express');
const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/userMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, admin, addProduct); // Only admins can add products
router.put('/:id', protect, admin, updateProduct); // Only admins can update products
router.delete('/:id', protect, admin, deleteProduct); // Only admins can delete products

module.exports = router;
