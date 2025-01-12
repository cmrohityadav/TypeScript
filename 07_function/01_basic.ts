// Regular function
function add(a:number,b:number):number{

    return a+b;
}
console.log(add(1,3))


//function expression
const multiply=function(a:number,b:number):number{
    return a*b;
}
console.log(multiply(10,3))


// arrow function
const sub=(a:number,b:number):number=>{
    return a-b;
}

//passing OPTIONAL Parameter
function greet(name:string,greeting?:string):string{
    return greeting ?`${greet }, ${name}`:`hello , ${name}`
}

// Rest Parameter

function sum(...numbers:number[]):number{
    return numbers.reduce((total,num)=>total +num,0)
}







