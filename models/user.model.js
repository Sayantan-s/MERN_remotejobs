const { Schema, model } = require('mongoose');
const AuthUtils = require('../helpers/AuthUtils');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    dp: String,
    role: {
        type: String,
        required: true,
        default: 'user'
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.password = await AuthUtils.hashPassword(this.password);
    }
    next();
});

//userSchema.methods.isPasswordValid

const User = model('User', userSchema, 'user');

module.exports = User;
