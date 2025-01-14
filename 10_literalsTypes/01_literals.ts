/**
 * const name=12
 * name=> variable
 * 12 => literal
 * 
 */

type coach="first class" |"second class"| "sleeper class";
//yeh type me sirf upar wali value pass hogi
function book(classtype:coach):void{
    console.log(classtype)
}

book("first class")


//it use mostly in redux

type Action='add' | 'delete'|'update'

function performAction(act:Action){

    switch(act){
        case 'add':
    }
}