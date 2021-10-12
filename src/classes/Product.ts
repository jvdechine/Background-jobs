import ICommom from "../interfaces/classes/ICommom";
import IProduct from '../interfaces/classes/IProduct';

export default class Product implements IProduct, ICommom{
    public name: string;
    public value: number;
    public date: Date;

    constructor(name:string, value: number, date: Date) {
        this.name = name;
        this.value = value;
        this.date = date;
    }
    
    toJson() {
        return {
            name: this.name,
            value: this.value,
            date: this.date
        }
    }
}