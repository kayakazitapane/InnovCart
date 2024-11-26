import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../api/cartAPI';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = async (productId) => {
        const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage
        if (!token) {
            setMessage('Please log in to add items to your cart.');
            return;
        }

        const cartData = {
            user: 'user_id', // Replace with the actual user ID
            cartItems: [{ product: productId, quantity: 1 }],
        };

        try {
            const response = await addToCart(cartData, token);
            setMessage('Item added to cart successfully!');
        } catch (err) {
            setMessage(err.response?.data.message || 'Failed to add item to cart.');
        }
    };

    if (loading) return <div className="text-center mt-10">Loading products...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            {message && <p className="text-center text-green-500 mb-4">{message}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="text-blue-500 font-bold mt-2">${product.price}</p>
                        <button
                            onClick={() => handleAddToCart(product._id)}
                            className="bg-blue-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
