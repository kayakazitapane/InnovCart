import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition ${
                disabled
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
