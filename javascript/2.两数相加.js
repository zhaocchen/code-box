/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let h1 = l1;
    let h2 = l2;
    let head = null;
    let tmp = 0;
    while (h1 || h2) {
        let cur = tmp;
        if (h1) {
            cur += h1.val;
            h1 = h1.next;
        }
        if (h2) {
            cur += h2.val;
            h2 = h2.next;
        }
        if (cur > 9) {
            cur -= 10;
            tmp = 1;
        } else {
            tmp = 0;
        }
        // console.log(cur, tmp);
        let node = new ListNode(cur);
        if (head) node.next = head;
        head = node;
    }
    if (tmp) {
        let node = new ListNode(tmp);
        node.next = head;
        head = node;
    }
    return reverseList(head);
};
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let reversedList = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedList;
}
// @lc code=end

