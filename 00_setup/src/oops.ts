class Stock{
    scrip:string;
    price:number;

    constructor(scrip:string,price:number){
        this.scrip=scrip
        this.price=price
    }
}

const sdaniStock=new Stock("JSW",250)