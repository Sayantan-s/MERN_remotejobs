const { model, Schema, Types } = require('mongoose');

const companySchema = new Schema({
    logo : {
        type : String,
        unique : true
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    tagline : {
        type : String,
        required : true,
        max: 53,
        min : 40
    },
    typeOfCorporation : {
        type : String,
        required : true
    },
    info : {
        type : String,
        required : true,
        max: 185,
        min : 120
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
    website : {
        type : String,
        required : true,
        unique : true
    },
    raised : Number,
    address : String,
    isDefault : {
        type : Boolean,
        default : true
    },

    culture : {
        youtube : {
            type : String,
            required : true,
            unique : true
        },

        videoThumbnail : {
            type : String,
            required : true,
        }
    },

    established : {
        type : Number,
        required : true
    },

    jobs : [
        {
            type : Types.ObjectId,
            ref : 'Job'
        }
    ]

})

const Company = model('Company', companySchema, 'company' );

module.exports = Company;