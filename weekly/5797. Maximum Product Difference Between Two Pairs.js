/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
    return ans;
};

console.log(maxProductDifference([5,6,2,7,4]));
console.log(maxProductDifference([4,2,5,9,7,4,8]));