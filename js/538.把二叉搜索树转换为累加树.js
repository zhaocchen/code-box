/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    // 后  中  前
    var dfs = function(root) {
        if (root == null) return;
        dfs(root.right)
        sum = sum + root.val
        root.val = sum
        dfs(root.left)
    }
    var sum = 0
    dfs(root)
    return root
};


// @lc code=end

