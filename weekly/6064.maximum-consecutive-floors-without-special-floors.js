/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
 var maxConsecutive = function(bottom, top, special) {
    let nums = special.slice().sort((a, b) => a - b);
    if (bottom - 1 != nums[0]) {
        nums.unshift(bottom - 1);
    }
    if (top + 1 != nums[nums.length - 1]) {
        nums.push(top + 1);
    }
    let ans = 0;
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, nums[i] - nums[i - 1] - 1);
    }
    return ans;
};


console.log(maxConsecutive(2, 9, [4, 6]));
console.log(maxConsecutive(6, 8, [7, 6, 8]));