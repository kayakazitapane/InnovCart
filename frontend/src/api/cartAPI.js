import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

// Add Item to Cart
export const addToCart = async (cartData, token) => {
    const response = await axios.post(API_URL, cartData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
