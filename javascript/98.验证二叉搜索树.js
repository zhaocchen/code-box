/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return compareBST(root, -Infinity, Infinity)
};
function compareBST(root, lower, upper) {
    if (!root) return true;
    if (root.val <= lower || root.val >= upper) return false;
    return compareBST(root.left, lower, root.val) && compareBST(root.right, root.val, upper);
}
// @lc code=end

