

function hasPath(root, val) {
    if (root == null) return val == 0 ? 1 : 0;
    const curVal = root.val;
    return hasPath(root.left, val - curVal) || hasPath(root.right, val - curVal);
}