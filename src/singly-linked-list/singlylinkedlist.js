import Node from "./Node.js";

class SinglyLinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value) {
        var newHead = new Node(value);
        if (!this.head) {
            this.head = this.tail = newHead;
        } else {
            this.tail.next = newHead;
            this.tail = newHead;
        }
        this.length++;
        return this;
    }


    pop() {
        if (this.length === 0) {
            return null;
        }
        
        let currentNode = this.head;
        let newTail = currentNode;
        if (this.length === 1) {
            this.head = this.tail = null;
            this.length--;
            return currentNode;
        }

        // if (this.length === 2) {
        //     let poppedNode = currentNode.next;
        //     currentNode.next = null;
        //     this.decrementLength();
        //     this.head = this.tail = currentNode;
        //     return poppedNode;
        // }
    
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        newTail.next = null;        
        this.tail = newTail;
        this.length--;
        return currentNode;
    }

// Equivalent to removing the head node
shift() {
    if (!this.head) {
        return null;
    }

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
        this.tail = null;
    }
    return oldHead;
}

// Equivalent to inserting 
unshift(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    if (this.length === 1) {
        this.tail = this.head;
    }
    return this;
}


    printAllNodes() {
        var currentNode = this.head;
        var output = '';
        while (currentNode != null) {
            if (output === '') {
                output += currentNode.value;
            } else {
                output += ' -> ' + currentNode.value;
            }
            currentNode = currentNode.next;
        }

        console.log(output);
    }
}

let sll = new SinglyLinkedList()
sll.push(1);
sll.push(2);
sll.push(4);
console.log('After pushing three nodes:');
sll.printAllNodes();
sll.pop();
sll.pop();
console.log('After popping two nodes:');
sll.printAllNodes();
sll.pop()
console.log('After popping another node:');
sll.printAllNodes
sll.push('Hello,');
sll.push('World!');
console.log('After pushing two nodes:');
sll.printAllNodes();
sll.shift();
sll.shift();
console.log('After shifting twice:');
sll.printAllNodes();
sll.unshift('Alex.');
sll.unshift("I'm")
console.log('Unshifting twice:')
sll.printAllNodes();


export default SinglyLinkedList;