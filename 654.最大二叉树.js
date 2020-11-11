/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let len = nums.length;
    if (len == 0) return null;
    if (len == 1) return new TreeNode(nums[0]);
    let maxNum = nums[0];
    let curIndex = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
            curIndex = i;
        }
    }
    let root = new TreeNode(maxNum);
    root.left = constructMaximumBinaryTree(nums.slice(0, curIndex));
    root.right = constructMaximumBinaryTree(nums.slice(curIndex+1));
    return root;
};
// @lc code=end

