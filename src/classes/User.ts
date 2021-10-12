import ICommom from "../interfaces/classes/ICommom";
import IUser from "../interfaces/classes/IUser";

export default class User implements IUser, ICommom{
    public name: string;
    public email: string;
    public password: string;

    constructor(name:string, email: string, password:string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    
    toJson() {
        return {
            name: this.name,
            email: this.email,
            password: this.password
        }
    }
}