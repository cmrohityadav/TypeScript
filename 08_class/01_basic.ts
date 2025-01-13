//class
class Person{
    name:string; //public
    private age:number;
    protected address:string;
    readonly bod:string;
    //constructor
    constructor(name:string,age:number,address:string,bod:string){
        this.name=name;
        this.age=age;
        this.address=address;
        this.bod=bod;

    }

    //getter for age
    public getAge():number{
        return this.age;
    }
}

class Admin extends Person{
    constructor(age:number){
        this.
    }
}

const person1=new Person("rohit",24,"india","01012000")

person1.bod="21012000"

