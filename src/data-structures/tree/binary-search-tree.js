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
}


let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(2);
bst.insert(10);



export default BinarySearchTree;