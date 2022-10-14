import DoubleNode from './doublenode.js';

// Higher memory consumption, faster iteration than SLL
class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value) {
        let newTail = new DoubleNode(value)
        if (this.length === 0) {
            this.head = this.tail = newTail;
        }
        this.tail.next = newTail;
        newTail.previous = this.tail;
        this.tail = newTail;
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        let oldTail = this.tail;
        this.tail = oldTail.previous;
        oldTail.previous = null;
        if (!this.tail ) { // i.e. tail is now null or the DLL contains single node
            this.head = this.tail;
            length--;
            return oldTail;
        }
        this.tail.next = null;
        this.length--;
        return oldTail;
    }


    shift() {
        if (this.length == 0) {
            return null;
        }
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        if (!this.head) {
            this.tail = this.head;
        } else {
            oldHead.next = null;
            newHead.previous = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value) {
        let newHead = new DoubleNode(value);
        if (this.length == 0) {
            this.head = this.tail = newHead;
        } else {
            let oldHead = this.head;
            newHead.next = oldHead;
            oldHead.previous = newHead;
            this.head = newHead;
        }
        this.length++;
        return this;
    }


    get(index) {
        if (0 <= index && index <= (this.length/2 - 1)) {
            let counter = 0;
            var currentNode = this.head;
            while(counter != index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else if (index < this.length) {
            let counter = this.length - 1;
            var currentNode = this.tail;
            while (counter != index) {
                currentNode = currentNode.previous;
                counter--;
            }
        } else {
            return null;
        }
        return currentNode;
    }


    printAllNodes() {
        let currentNode = this.head;
        let message = currentNode.value;
        while (currentNode.next) {
            currentNode = currentNode.next;
            message += ` -> ${currentNode.value}`;
        }

        console.log(message);
    }

}


let dll = new DoublyLinkedList();
dll.push('First');
dll.push('Second');
dll.printAllNodes();
dll.pop();
console.log('Popped once...');
dll.printAllNodes();
dll.pop();
console.log('Popped twice...');
dll.printAllNodes();
dll.push('First');
dll.push('Second');
dll.push('Third');
console.log('Pushing three');
dll.printAllNodes();
dll.shift();
dll.shift();
console.log('Shifting twice:');
dll.printAllNodes();
dll.unshift('Second');
dll.unshift('First');
console.log('Unshifting the shifted nodes:');
dll.printAllNodes();
console.log('Getting first node: ' + dll.get(0).value);
console.log('Getting second node: ' + dll.get(1).value);
console.log('Getting third node: ' + dll.get(2).value);


export default DoublyLinkedList;