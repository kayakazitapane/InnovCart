const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true, // You can set this to `false` if it's optional
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: String,
            required: true, // Set to true or false based on whether it's mandatory
            unique: true,   // Ensure uniqueness if required
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Encrypt password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
