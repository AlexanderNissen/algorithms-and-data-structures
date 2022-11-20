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
        let traversedNodes = [];
        let nodeQueue = [currentNode];
        while (nodeQueue.length != 0) {
            currentNode = nodeQueue.shift();
            traversedNodes.push(currentNode.value);
            if (currentNode.left) {
                nodeQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                nodeQueue.push(currentNode.right);
            }
        }
        return traversedNodes;
    }

    traverseDepthFirstPreorder() {
        if (!this.root) {
            return null;
        }
        let traversedNodes = []
        function traverse(node) {
            traversedNodes.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return traversedNodes;
    }

    traverseDepthFirstInOrder() {
        if (!this.root) {
            return null;
        }
        let traversedNodes = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            traversedNodes.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return traversedNodes;
    }

    traverseDepthFirstPostOrder() {
        if (!this.root) {
            return null;
        }
        let traversedNodes = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            traversedNodes.push(node.value);
        }
        traverse(this.root);
        return traversedNodes;
    }
}


// TODO: Export to test cases
let bst = new BinarySearchTree();
console.log('Inserting 5, 3, 2, and 10 in given order')
bst.insert(5);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(10);
bst.insert(8);
bst.insert(9);
console.log('Check if BST contains 0, 4, 11, 5, and 2:');
console.log(bst.contains(0));
console.log(bst.contains(4));
console.log(bst.contains(11));
console.log(bst.contains(5));
console.log(bst.contains(2));
console.log(bst.contains(10));
console.log("Traverse order, breadth first: " + bst.traverseBreadthFirst());
console.log("Traverse order, depth-first pre-order: " + bst.traverseDepthFirstPreorder());
console.log("Traverse order, depth-first in-order: " + bst.traverseDepthFirstInOrder());
console.log("Traverse order, depth-first post-order: " + bst.traverseDepthFirstPostOrder());



export default BinarySearchTree;