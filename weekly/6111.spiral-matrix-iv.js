/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
 var spiralMatrix = function(m, n, head) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let ans = Array.from({ length: m }, v => new Array(n).fill(-1));
    let i = 0, j = 0, k = 0;
    while (head) {
        ans[i][j] = head.val;
        head = head.next;
        let x = i + dirs[k][0];
        let y = j + dirs[k][1];
        if (x < 0 || x > m - 1 || y < 0 || y > n - 1 || ans[x][y] != -1) {
            k = (k + 1) % 4;
        }
        i = i + dirs[k][0];
        j = j + dirs[k][1];
    }
    return ans;
};

console.log(spiralMatrix(3, 5, [3,0,2,6,8,1,7,9,4,2,5,5,0]));
// [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]
console.log(spiralMatrix(1, 4, [0,1,2]));
// [[0,1,2,-1]]
