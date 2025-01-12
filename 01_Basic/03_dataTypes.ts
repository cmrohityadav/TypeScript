// number

let userId:number=15963;

//string
let username:string="cmrohityadav"


// boolean
let isLoggedIn:boolean=true;

// bigInt

let bignum:bigint=123456789478n

// Object

let user:{name:string,age:number}={
    name:"rohit",
    age:24
}
//alternative
let pakcet:object={
    name:"Rohit",
    age:24
}



//Array
let stock:string[]=["tcs","lt","adani"]



// Undefined
let datatypeundefine:undefined=undefined



//null

let nullData:null=null


// tuple 
/**
 * It is array absically
 * but contains diffrent data types
 */

let tupleArray:[number,string,boolean]=[1,"Rohit",true]



//enum
/**
 * enum are constant
 */

enum Color{

    primaryColor="Red",
    secondaryColor="blue",
}

let myColorHeader:Color=Color.primaryColor



//any

let anyDataType:any="it could be any thing"

anyDataType=40


//unknown
// depends on future
let notSure:unknown=4

if(typeof notSure==='number'){
    notSure.toFixed(2)
}
if(typeof notSure==='string'){
    notSure.charAt(1)
}


//never

/** if we want NO return value */

function infitiRun():never{
    while(true){

    }
}



//void
function add():void{
    console.log("rohit")
}












