class User{
    constructor(name, email, password, phone, type){
        this._id = null;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.type = type || 'user';
    }
    
}