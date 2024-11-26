import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Update this if the backend is hosted elsewhere

// Register a new user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Return the response from the backend
};

// Login a user
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Return the response from the backend
};
