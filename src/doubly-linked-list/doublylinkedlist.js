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
        if (!this.tail ) { // i.e. tail is now null or the DLL contains single node
            this.head = this.tail;
            length--;
            return oldTail;
        }
        this.tail.next = null;
        this.length--;
        return oldTail;
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
dll.printAllNodes();


export default DoublyLinkedList;