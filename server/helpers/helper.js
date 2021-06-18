class Helper{ 
    static checkDataType(eletype, element){
        let type = eletype.toLowerCase();
        if(type === 'array'){
            if(!Array.isArray(element)){
                throw new Error("Mandatory datatype to be an array!");
            }
            else return;
        }
        else{
            if(typeof(element) !== type){
                throw new Error(`${element} is not ${type}!`);
            }
            else return;
        }
    }
}

export default Helper;