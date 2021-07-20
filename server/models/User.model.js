const { ObjectID } = require("mongodb");
const { db } = require("../helpers/connectToDatabase");

class User{
    constructor(name, email, password, phone, type, id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.type = type || 'user';
        this._id = id ? new ObjectID(id) : null;
    }

    async save(){

        if(!this._id){

            const { _id, ...rest } = this;

            const res = await db('user').insertOne(rest);

            return res;
        }
    }

    static async findOne(options,{
        projections = null
    }){

        try {

            const res = await db('user').aggregate([
                {
                    $match : options
                },
                {
                    ...(
                        projections && { $projections : projections }
                    )
                }
            ])
    
            return res[0];
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async exists(options){

        const res = await User.findOne(options);

        return !!res
    }

} 

module.exports = User;  