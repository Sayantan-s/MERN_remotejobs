const bcrypt = require('bcrypt');
const { ACCESS_TOKEN, REFRESH_TOKEN } = require('../config/index');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


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
        expiry = '10h',
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

    static generate_refreshToken(){
        return crypto.randomBytes(64).toString("hex");
    }

    static async createAuthTokens({ payload }){
        const access_token = await AuthUtils.generate_JWT({ payload })

        const refresh_token = this.generate_refreshToken()

        return { access_token, refresh_token }
    }
}

module.exports = AuthUtils