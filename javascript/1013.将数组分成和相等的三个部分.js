/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((a,c) => a + c)
    if(sum % 3 !== 0) return false
    let target = sum / 3;
    let curSum = 0;
    let count = 0;
    // console.log(target)
    for (let i = 0; i < A.length; i++) {
        let curNum = A[i]
        // console.log(count, curSum, typeof curNum)
        curSum += curNum;
        if (curSum === target) {
            target = target / (count+1) * (count + 2);
            count++;
        }
    }
    // console.log(count)
    if (count < 3) return false;

    return true
};
// @lc code=end

// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))
// console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]))
// console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]))