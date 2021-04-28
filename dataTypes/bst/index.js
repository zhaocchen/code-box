
// Binary Search Tree

function Node (element) {
    this.element = element;
    this.left = null;
    this.right = null;
}

/**
 * insert(element), 插入
 * inOrder(tree), 中序遍历 
 * getMin(), 获取最小值
 * getMax(), 获取最大值
 * find(element), 查找给定值
 * remove(element), 移除
 * removeNode(node, element), 删除节点
 */
function BST () {
    this.root = null;
}

BST.prototype.insert = function (element) {
    var node = new Node(element);
    if (this.root == null) {
        this.root = node
    } else {
        var currNode = this.root;
        var parent;
        while (true) {
            parent = currNode
            if (element < currNode.element) {
                // 左子树
                currNode = currNode.left;
                if (currNode == null) {
                    parent.left = node;
                    break;
                }
            } else {
                currNode = currNode.right;
                if (currNode == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

BST.prototype.inOrder = function (node) {
    if (node != null) {
        this.inOrder(node.left);
        console.log(node.element);
        this.inOrder(node.right);
    }
}

BST.prototype.getMin = function (root) {
    // 遍历到最左边
    var currNode = this.root || root;
    while (currNode.left != null) {
        currNode = currNode.left;
    }
    return currNode
}

BST.prototype.getMax = function (root) {
    // 遍历到最右边
    var currNode = this.root || root;
    while (currNode.right != null) {
        currNode = currNode.right;
    }
    return currNode;
}

BST.prototype.find = function (element) {
    var currNode = this.root;
    while (currNode != null) {
        if (element == currNode.element) {
            return currNode;
        } else if (element == currNode.element) {
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
        }
    }
    return null;
}

BST.prototype.removeNode = function (node, element) {
    if (node == null) { return null; }
    // 当前节点、位于左子树、位于右子树
    if (element == node.element) {
        if (node.left == null && node.right == null) {
            return null;
        } else if (node.left == null) {
            return node.right;

        } else if (node.right == null) {
            return node.left;
        }
        var currNode = this.getMin(node.right);
        node.element = currNode.element;
        node.right = this.removeNode(node.right, currNode.element);
        return node;
    } else if (element < node.element) {
        node.left = this.removeNode(node.left, element);
        return node;
    } else {
        node.right = this.removeNode(node.right, element);
        return node;
    }
}

BST.prototype.remove = function (element) {
    this.root = this.removeNode(this.root, element);
}

// test
var tree = new BST();
tree.insert(3);
tree.insert(2);
tree.insert(6);
// tree.inOrder(9);

// tree.inOrder(tree.root);

// console.log(tree.getMin());
// console.log(tree.getMax());

// console.log(tree.find(6))
// console.log(tree.find(12))

// console.log(tree.removeNode(tree.root, 3));

tree.remove(3)

console.log(tree)
tree.inOrder(tree.root);
