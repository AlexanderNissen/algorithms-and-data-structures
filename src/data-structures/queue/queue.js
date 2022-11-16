import { SingleNode as Node } from "../singly-linked-list/singlenode.js";

class Queue {
    constructor() {
        first = null;
        size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        this.first.next = newNode;
    }
}


let queue = new Queue();
console.log("Something");



export default Queue;