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
        let newTail = currentNode;    
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

    get(index) {
        if (index < 0 || this.length <= index) { // Might want to raise error instead of returning null
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }


    // Customary to return booleans when setting values on nodes in SLL
    // set() sets the value, not the entire node
    set(index, value) {
        let node = this.get(index);
        if (node === null) { // either no node was found, or the SLL is of length 0 and can't be updated
            return false;
        }
        node.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || this.length < index) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
            return true;
        } else if (index === this.length) {
            this.push(value);
            return true;
        } else {
            let previousNode = this.get(index - 1);
            let oldNode = previousNode.next;
            let newNode = new Node(value);
            previousNode.next = newNode;
            newNode.next = oldNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }

        let removedNode;
        if (index === this.length - 1) {
            removedNode = this.pop();
        } else if (index === 0) {
            removedNode = this.shift();
        } else {
            let previousNode = this.get(index - 1);
            removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            this.length--;
        }
        return removedNode;
    }

    reverse() {
        if (this.length === 0) {
            return null;
        }
        if (this.length === 1) {
            return this;
        }
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let previousNode;
        let nextNode = currentNode.next;
        while(nextNode) {
            previousNode = currentNode
            currentNode = nextNode;
            nextNode = nextNode.next;
            currentNode.next = previousNode;         
        }
        this.tail.next = null;
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
        output += `\nLength: ${this.length}`;
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
console.log('Getting nodes:');
console.log(sll.get(0));
console.log(sll.get(1));
sll.set(1, 'Julie.');
console.log("After setting the value of the second node to 'Julie'");
sll.printAllNodes();
sll.insert(0, 'FIRST');
sll.insert(sll.length, 'LAST');
sll.insert(2, 'MIDDLE');
console.log('After inserting at the front, end and middle of the singly linked list:');
sll.printAllNodes();
sll.remove(2);
sll.remove(3);
console.log('After removing middle and last node:');
sll.printAllNodes();
sll.reverse();
console.log('After reversing linked list:');
sll.printAllNodes();

export default SinglyLinkedList;