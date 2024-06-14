function addTwo(num:number){
   
    return num+2
}

console.log(addTwo(5))

function getUpper(val:string){

    return val.toUpperCase()
}

getUpper("india")


function signup(name:string,email:string,isPaid:boolean){

}

signup("rohit","rohit@gmail.com",true)


// default parameter
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}

loginUser("rohit","r@readonly.com")




export{}