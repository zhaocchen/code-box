/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const len = preorder.length;
    if (len == 0) return null;
    const val = preorder[0];
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (inorder[i] == val) {
            index = i;
            break;
        }
    }
    let root = new TreeNode(val);
    // console.log(index)
    // console.log(preorder.slice(1, index+1), inorder.slice(0, index));
    // console.log(preorder.slice(index+1), inorder.slice(index+1));
    root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
    return root;
};
// @lc code=end

