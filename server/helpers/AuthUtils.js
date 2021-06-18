const bcrypt = require('bcrypt');

class AuthUtils{
    static async hashPassword(password){
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    }
}

module.exports = AuthUtils