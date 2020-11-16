
function treePathSum (root) {
    // 后续遍历
    return postorder(root, 0);
}

function postorder (root, ac) {
    if (root == null) return 0;
    ac += root.val;
    if (root.left == null && root.right == null) return ac;
    let sum=0;
    if (root.left != null) {
        sum += postorder(root.left, ac)
    }
    if (root.right != null) {
        sum += postorder(root.right, ac)
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

console.log(treePathSum(tree))