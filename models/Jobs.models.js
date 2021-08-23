const { Schema, model, Types }  =  require("mongoose");

const jobSchema = new Schema({

    company : {
        name : {
            type : Schema.Types.String,
            required : true
        },
        thumbnail : {
            type : String,
            required : true
        },
        tagline :  {
            type : String,
            required : true
        } 
    },

    companyInfo : {
        type : Types.ObjectId,
        ref : 'Company'
    },

    roleInfo : {
        role : {
            type : String,
            required : true
        },
    
        jobtype : {
            type : String,
            default : 'Full-time'
        },
    
        salary:{
            min : {
                type : Number,
                required : true,
                min: 400,
            },
            max : {
                type : Number,
                required : true,
                min: 1000
            }
        },

        skillXP : {
            type : Number,
            required : true,
            min: 10,
            max : 100
        },

        dept : {
            type : String,
            required : true
        },
    
        location : {
            type : String,
            default : 'Remote'
        },
        roleOverview : {
            type : String,
            required : true
        },   
        mainResponsibilities :[ 
            {
                type : String,
                required : true
            }
        ],

        skillsReq : [
            {
                type : String,
                required : true
            }
        ]
    },
    tags : {
        type : Array,
        required : true,
        min : 3,
        max : 10
    }

},{ timestamps : true })

const Jobs = model('Job', jobSchema, 'jobs')

module.exports = Jobs