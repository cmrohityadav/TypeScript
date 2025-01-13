/*
create components that can work with any data type
while still maintaing type
*/
function identify <T>(arg:T):T{
    return arg;
}


let numberIdenty=identify<number>(45)
let stringIdenty=identify<string>("45")