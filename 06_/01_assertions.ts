let someValue:any="this is a string"

let strLen:number=(someValue as string).length
let strLenTwo:number=(<string>someValue).length
