import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const token = localStorage.getItem('authToken'); // Check if the user is logged in

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-500 text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Logo */}
                <Link to="/" className="text-2xl font-bold">
                    MyApp
                </Link>

                {/* Right: Navigation Links */}
                <div className="flex items-center space-x-4">
                    {/* Conditionally Render Login/Register or Orders */}
                    {!token ? (
                        <>
                            <Link
                                to="/login"
                                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <Link
                            to="/orders"
                            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            Orders
                        </Link>
                    )}

                    {/* My Account Dropdown */}
                    {token && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                            >
                                My Account
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-blue-500 rounded-lg shadow-lg">
                                    <Link
                                        to="/account"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        My Account
                                    </Link>
                                    <Link
                                        to="/track-orders"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Track Orders
                                    </Link>
                                    <Link
                                        to="/returns"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Returns
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Wishlist Icon */}
                    <Link
                        to="/wishlist"
                        className="text-white hover:text-gray-300 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 19.071a2.5 2.5 0 01-.707-3.536l6.364-6.364a1.5 1.5 0 012.121 0l6.364 6.364a2.5 2.5 0 11-3.536 3.536l-4.95-4.95a.5.5 0 00-.707 0l-4.95 4.95a2.5 2.5 0 01-3.536 0z"
                            />
                        </svg>
                    </Link>

                    {/* Cart Icon */}
                    <Link
                        to="/cart"
                        className="text-white hover:text-gray-300 transition relative"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M17 13l1.6 8M6 21h12M10 9h4"
                            />
                        </svg>
                        {/* Cart Item Count */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
