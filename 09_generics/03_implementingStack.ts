class Stack<T>{
    private items:T[]=[];
    push(item:T):void{
        this.items.push(item)
    }
    pop():T | undefined{
        return this.items.pop()
    }
}


const numStack=new Stack<number>;

numStack.push(1)
numStack.push(2)

numStack.pop();

console.log(numStack)


const stringStack=new Stack<string>;
stringStack.push("rohit")