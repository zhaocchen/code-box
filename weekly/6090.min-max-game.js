/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMaxGame = function(nums) {
    while(nums.length > 1) {
        let n = nums.length;
        let tmp = [];
        for (let i = 0; i < n; i += 2) {
            if (i % 4 == 2) {
                tmp.push(Math.max(nums[i], nums[i + 1]));
            } else {
                tmp.push(Math.min(nums[i], nums[i + 1]));
            }
        }
        nums = tmp;
    }
    return nums[0];
};

console.log(minMaxGame([1,3,5,2,4,8,2,2]));
console.log(minMaxGame([3]));