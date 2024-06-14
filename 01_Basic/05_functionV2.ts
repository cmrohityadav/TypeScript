// defining the return type
function addTwo(num:number):string{
   
    return "hello"
}

let result:string=addTwo(2)

function getValue(myVal:number){
    if(myVal>5){
        return true
    }

    return "200 OK"
}

const getHello=(s:string):string=>{
 return ""
}


const heros=["thor","spider","ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})


function handleError(errmsg:string):never{
    throw new Error(errmsg)
}