
// 求二叉树所有根到叶子路径组成的数字之和，二叉树每个节点的value范围是1-9

function treeNumSum(root) {
    return inorder(root, 0)
}

function inorder(root, num) {
    if (root == null) return 0;
    num = num * 10 + root.val;
    if (root.left == null && root.right == null) return num;
    let sum = 0;
    if (root.left != null) {
        sum += inorder(root.left, num)
    }
    if (root.right != null) {
        sum += inorder(root.right, num)
    }
    return sum;
}

var tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null,
        },
        right: null
    }
}

console.log(treeNumSum(tree))