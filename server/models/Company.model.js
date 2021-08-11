const { model, Schema } = require('mongoose');

const companySchema = new Schema({
    _id : {
        type : Schema.Types.ObjectId
    },
    logo : {
        type : String,
        unique : true
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    typeOfCorporation : {
        type : String,
        required : true
    },
    info : {
        type : String,
        required : true
    },
    size : {
        minSize : {
            type : Number,
            min : 5,
            required : true
        },
        maxSize : {
            type : Number,
            min : 10,
            required : true
        }
    },
    raised : Number,
    address : String,
    isDefault : {
        type : Boolean,
        default : true
    },

    jobs : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Job'
        }
    ]

})

const Company = model('Company', companySchema, 'company' );

module.exports = Company;