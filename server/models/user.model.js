const { Schema, model } = require('mongoose');
const AuthUtils = require('../helpers/AuthUtils');

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : String,
    phone : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true,
        default : 'user'
    }
})

userSchema.pre('save', async function(next){
    this.password = await AuthUtils.hashPassword(this.password);
    next();
})

const User = model('users', userSchema, 'user');

module.exports = User;