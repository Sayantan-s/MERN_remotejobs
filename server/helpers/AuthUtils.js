const bcrypt = require('bcrypt');
const { ACCESS_TOKEN } = require('../config/index');
const jwt = require('jsonwebtoken');


class AuthUtils{
    static async hashPassword(password){
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    }

    static async verifyPassword(password, hash){
        return await bcrypt.compare(password, hash);
    }

    static generate_JWT({
        payload,
        expiry = '120s',
        SECRET = ACCESS_TOKEN
    }){
        return jwt.sign(
            payload,
            SECRET,
            {
                expiresIn : expiry
            }
        )
    }

    static decode_JWT({
        token,
        SECRET = ACCESS_TOKEN
    }){
        return jwt.verify(token, SECRET);
    }
}

module.exports = AuthUtils