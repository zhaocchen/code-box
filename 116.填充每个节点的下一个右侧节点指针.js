/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) return null;
    connectNodes(root.left, root.right);
    return root;
};

function connectNodes (node1, node2) {
    if (node1 == null || node2 == null) return;

    node1.next = node2;

    connectNodes(node1.left, node1.right);
    connectNodes(node2.left, node2.right);
    
    connectNodes(node1.right, node2.left);
}
// @lc code=end

