import React, { useState } from 'react';
import { registerUser } from '../api/authAPI';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        mobileNumber: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await registerUser(formData);
            setMessage(response.message); // Display success message
        } catch (err) {
            console.error('Registration Error:', err.response?.data || err.message);
            setMessage(err.response?.data.message || 'Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    />
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
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>
                {message && (
                    <p
                        className={`text-center mt-4 ${
                            message.includes('successfully') ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
