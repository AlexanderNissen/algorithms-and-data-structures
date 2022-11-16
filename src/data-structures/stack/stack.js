import SingleNode from '../singly-linked-list/singlenode.js';

/*
    Stack implemention using singly linked list
*/
class Stack {
    
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let node = new SingleNode(value);
        if (this.top) {
            node.next = this.top;
        }
        this.top = node;
        return ++this.size;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        let oldTop = this.top;
        this.top = oldTop.next;
        oldTop.next = null;
        this.size--;
        return oldTop.value;
    }

    printStack() {
        if (!this.top) {
            console.log(null);
        }
        let currentNode = this.top;
        let message = currentNode.value
        while (currentNode.next) {
            currentNode = currentNode.next;
            message += ' -> ' + currentNode.value;
        }
        console.log(message);
    }

}


// TODO: Export to test cases
let stack = new Stack();
stack.push('3');
stack.push('2');
stack.push('1');
console.log('After pushing values 3, 2, 1 to the stack:');
stack.printStack();
stack.pop();
stack.pop();
stack.pop();
stack.push(5);
stack.push(4);
console.log('Popping thrice and pushing values 5, 4:')
stack.printStack();



export default Stack;