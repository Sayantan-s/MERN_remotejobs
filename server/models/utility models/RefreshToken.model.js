const { db } = require("../../helpers/connectToDatabase")

class RefreshToken{
    
    static async create({ token }){
        const  res = await db('refresh_token').insertOne({ token });
        if(res.insertedCount === 1){
            return res;
        }
        throw new Error("Failed to create a refresh token!");
    }

}

module.exports = RefreshToken