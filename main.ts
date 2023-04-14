import {Stack} from "./Stack";

let stack: Stack<number> = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
console.log(stack.list);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());