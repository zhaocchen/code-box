/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var partitionArray = function(nums, k) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);
    let ans = 1;
    let prev = nums[0] + k;
    for (let num of nums) {
        if (num <= prev) continue;
        prev = num + k;
        ans++;
    }
    return ans;
};

console.log(partitionArray([3,6,1,2,5], 2));
console.log(partitionArray([2,2,4,5], 0));

