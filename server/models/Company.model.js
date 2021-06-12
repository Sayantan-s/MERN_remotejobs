class Company {
    constructor(companyImageUrl, companyName, typeOfCorporation, companySize, companyAddress, raised){
        this.companyImageUrl = companyImageUrl;
        this.companyName = companyName;
        this.typeOfCorporation = typeOfCorporation;
        this.companySize = companySize;
        this.companyAddress = companyAddress;
        this.raised = raised
    }
}

module.exports = Company;