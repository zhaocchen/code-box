/**
 * @param {number[]} nums
 * @return {number}
 */
//  var totalSteps = function(nums) {
//     const n = nums.length;
//     let pre = 0, i = 0;
//     let ans = 0;
//     while(i < n) {
//         i = pre + 1;
//         while (i < n && nums[pre] > nums[i]) {
//             i++;
//         }
//         ans = Math.max(i - pre - 1, ans);
//         pre = i;
//     }
//     return ans;
// };
// error

console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11]));
console.log(totalSteps([4,5,7,7,13]));
console.log(totalSteps([10,1,2,3,4,5,6,1,2,3])); // 6  error-9