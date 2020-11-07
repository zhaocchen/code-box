/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {

    var helper = function(root) {
        if (!root) return;
        helper(root.right)
        accum += root.val;
        root.val = accum
        helper(root.left)
    }

    let accum = 0;
    helper(root)
    return root;
};
// @lc code=end

