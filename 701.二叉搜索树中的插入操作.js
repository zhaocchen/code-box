/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root == null) {
        root = new TreeNode(val)
        return root
    }
    let p = root
    while (p) {
        const cur = p.val
        if (val > cur) {
            if (p.right == null) {
                p.right = new TreeNode(val)
                return root
            }
            p = p.right
        } else {
            if (p.left == null) {
                p.left = new TreeNode(val)
                return root
            }
            p = p.left
        }
    }
    return root
};
// @lc code=end

