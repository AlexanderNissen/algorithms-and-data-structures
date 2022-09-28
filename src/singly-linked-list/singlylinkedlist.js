import Node from "./Node.js";

class SinglyLinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value) {
        var node = new Node(value);
        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.incrementLength();
    }


    pop() {
        if (this.length === 0) {
            return null;
        }
        
        var currentNode = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
            this.decrementLength();
            return currentNode;
        }

        if (this.length === 2) {
            let poppedNode = currentNode.next;
            currentNode.next = null;
            this.decrementLength();
            this.head = this.tail = currentNode;
            return poppedNode;
        }
    
        for (let i = 0; i < (this.length - 2); i++) {
            currentNode = currentNode.next;
        }
        let poppedNode = currentNode.next;
        currentNode.next = null;
        this.decrementLength();
        this.tail = currentNode;
        return poppedNode;
    }

    incrementLength() {
        this.length += 1;
    }

    decrementLength() {
        this.length -= 1;
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


export default SinglyLinkedList;