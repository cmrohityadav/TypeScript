interface VehicleInterface{
    make:string,
    model:string,
}

interface CarInterface extends VehicleInterface{
    isElectric:boolean
}

//that make difference from type
interface VehicleInterface{
    make:string,
    model:string,
    releaseyear:number
}


const Ola:CarInterface={
    make:"ola",
    model:"ev2",
    isElectric:true,
    releaseyear:2024
}