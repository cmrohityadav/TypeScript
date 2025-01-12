let score:number | string=33

score=44
score="55"

type User={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let rohit:User |Admin ={
    name:"Rohit",
    id:50
}
console.log(rohit)
rohit={
    username:"cmrohityadav",
    id:200
}
console.log(rohit)
export{}