const bcrypt = require('bcrypt');
const { ACCESS_TOKEN, REFRESH_TOKEN } = require('../config/index');
const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/utility models/RefreshToken.model');


class AuthUtils extends RefreshToken {
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

    static async createAuthTokens({ payload }){
        const access_token = await AuthUtils.generate_JWT({ payload })

        const refresh_token = await AuthUtils.generate_JWT({
            payload,
            expiry : '1yr',
            SECRET : REFRESH_TOKEN
        })

        await AuthUtils.create({ token : refresh_token });

        return { access_token, refresh_token }
    }
}

module.exports = AuthUtils