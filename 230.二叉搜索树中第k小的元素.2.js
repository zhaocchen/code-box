/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 后序遍历
    let arr = inorder(root);
    // console.log(arr, k);
    return arr[k -1];
};

function inorder(root) {
    if (root == null) return [];
    return [...inorder(root.left), root.val, ...inorder(root.right)]
}
// @lc code=end

