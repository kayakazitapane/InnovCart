import React, { useState } from 'react';
import { loginUser } from '../api/authAPI';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await loginUser(formData);
            localStorage.setItem('authToken', response.token); // Save the token to localStorage
            setToken(response.token);
            setMessage('Login successful');
        } catch (err) {
            console.error('Login Error:', err.response?.data || err.message);
            setMessage(err.response?.data.message || 'Login failed');
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
                {message && (
                    <p
                        className={`text-center mt-4 ${
                            message === 'Login successful' ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {message}
                    </p>
                )}
                {token && (
                    <p className="mt-4 text-sm text-gray-600 break-words">
                        <span className="font-semibold">JWT Token:</span> {token}
                    </p>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
