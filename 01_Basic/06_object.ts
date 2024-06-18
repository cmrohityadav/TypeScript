const User={
    name:"Rohit",
    email:"Rohit@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}


createUser({name:'Rohit',isPaid:true})

// function createCourse():{}{}

function createCourse():{name:string,ispaid:boolean}{

    return {name:'reactjs',ispaid:true}
}

export {}