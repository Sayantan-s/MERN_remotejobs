const { Schema, model }  =  require("mongoose");

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