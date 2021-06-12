const Company  =  require("./Company.model");

class Jobs extends Company{
    constructor(role, ctc, exp, perks, roleDescription, jobDescription){
        super();
        this.role = role;
        this.ctc = ctc;
        this.exp = exp;
        this.perks = perks;
        this.roleDescription = roleDescription;
        this.jobDescription = jobDescription;
    }

    save(){
        
    }

}

module.exports = Jobs