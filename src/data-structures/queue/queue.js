import Node from "../singly-linked-list/singlenode.js";

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Push/add equivalent
    enqueue(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // Remove equivalent
    dequeue() {
        if (this.size === 0) {
            return null;
        }
        if (this.size === 1) {
            this.last = null;
        }
        let removedNode = this.first;
        this.first = removedNode.next;
        this.size--;
        return removedNode;        
    }

    printQueue() {
        let currentNode = this.first;
        let message = currentNode.value;
        while (currentNode.next) {
            currentNode = currentNode.next;
            message += " -> " + currentNode.value;
        }
        console.log(message);
    }
}


let queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
console.log("Enqueueing 1, 2, 3:");
queue.printQueue();
console.log(`Length: ${queue.size}`);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log("Dequeueing all three:");
queue.printQueue;
console.log(`Length: ${queue.size}`);



export default Queue;