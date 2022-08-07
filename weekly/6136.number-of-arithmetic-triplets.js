/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 var arithmeticTriplets = function(nums, diff) {
    let numSet = new Set(nums);
    let ans = 0;
    for (let num of nums) {
        if (numSet.has(num + diff) && numSet.has(num + diff + diff)) {
            ans++;
        }
    }
    return ans;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));