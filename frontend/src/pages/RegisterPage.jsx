import React, { useState } from 'react';
import { registerUser } from '../api/authAPI';
// Import social media icons
import { FcGoogle } from 'react-icons/fc';        // Google icon
import { FaFacebookF, FaApple } from 'react-icons/fa';  // Facebook and Apple icons

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setMessage(response.message);
    } catch (err) {
      console.error('Registration Error:', err.response?.data || err.message);
      setMessage(err.response?.data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        {/* Social Media Buttons with Icons */}
       
<div className="flex justify-center gap-4 mb-4">
  <button className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-lg hover:bg-gray-300">
    <FcGoogle size={32} />
  </button>
  <button className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-lg hover:bg-gray-300">
    <FaFacebookF size={32} className="text-blue-600" />
  </button>
  <button className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-lg hover:bg-gray-300">
    <FaApple size={32} />
  </button>
</div>


        <div className="text-center text-gray-500 mb-4">or register with your</div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-200 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-200 focus:outline-none"
          />
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-200 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-200 focus:outline-none"
          />

          {/* Checkbox and reCAPTCHA placeholder */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            <label className="text-sm text-gray-700">
              Yes, sign me up for the latest news and deals.
            </label>
          </div>

          <div className="w-full flex justify-center py-3">
            <div className="border rounded-lg px-6 py-3 bg-gray-100">[reCAPTCHA]</div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Register Profile
          </button>
        </form>

        {message && (
          <p className={`text-center mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;

