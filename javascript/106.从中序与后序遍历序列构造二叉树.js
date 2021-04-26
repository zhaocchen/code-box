/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const len = inorder.length;
    if (len == 0) return null;
    const val = postorder[len - 1];
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (inorder[i] == val) {
            index = i;
            break;
        }
    }
    // console.log(val, index);
    // console.log(inorder.slice(0, index), postorder.slice(0, index));
    // console.log(inorder.slice(index+1), postorder.slice(index, len-1))
    let root = new TreeNode(val);
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index+1), postorder.slice(index, len-1));
    return root;
};
// @lc code=end

