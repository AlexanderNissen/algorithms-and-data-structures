import DoubleNode from './doublenode.js';

// Higher memory consumption, faster iteration than SLL
class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value) {
        let newTail = DoubleNode(value)
        if (this.length === 0) {
            this.head = this.tail = newNode;
        }
        this.tail.next = newTail;
        newTail.previous = this.tail;
        this.tail = newTail;
        this.length++;
        return this;
    }

}


let dll = new DoublyLinkedList();


export default DoublyLinkedList;