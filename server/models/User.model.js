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
} 

module.exports = User;  