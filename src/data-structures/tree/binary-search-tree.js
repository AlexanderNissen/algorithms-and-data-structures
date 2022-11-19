import TreeNode from "./tree-node.js";

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    // This can obviously be done more elegantly
    insert(value) {
        let newNode = new TreeNode(value); 
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    throw "Inserted value must not be duplicate of existing value";
                }
            }
        }
    }

    contains(value) {
        let currentNode = this.root;
        while(currentNode) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    traverseBreadthFirst() {
        if (!this.root) {
            return null;
        }
        let currentNode = this.root;
        let iteratedNodes = [];
        let nodeQueue = [currentNode];
        while (nodeQueue.length != 0) {
            currentNode = nodeQueue.shift();
            iteratedNodes.push(currentNode.value);
            if (currentNode.left) {
                nodeQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                nodeQueue.push(currentNode.right);
            }
        }
        return iteratedNodes;
    }

    traverseDepthFirstPreorder() {
        if (!this.root) {
            return null;
        }
        let currentNode = this.root;
        let iteratedNodes = []
        if (node) {

        }

    }
}


// TODO: Export to test cases
let bst = [new BinarySearchTree();
console.log('Inserting 5, 3, 2, and 10 in given order')
bst.insert(5);
bst.insert(3);
bst.insert(2);
bst.insert(10);
console.log('containsing 0, 4, 11, 5, and 2:');
console.log(bst.contains(0));
console.log(bst.contains(4));
console.log(bst.contains(11));
console.log(bst.contains(5));
console.log(bst.contains(2));
console.log(bst.contains(10));
console.log("Iterated order, breadth first: " + bst.traverseBreadthFirst());
console.log("Iterated order, depth-first pre-order: " + bst.traverseDepthFirstPreorder());



export default BinarySearchTree;