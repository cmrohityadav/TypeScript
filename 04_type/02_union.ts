
type Vehicle={
    make:string,
    model:string,
}

type Car= Vehicle & {
    isElectric:boolean,
}

const Tata:Car={
    make:"tata",
    model:"ev2",
    isElectric:true
}

