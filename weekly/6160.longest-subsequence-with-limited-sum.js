/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    let pre = [];
    const n = nums.length;
    for (let i = 0, sum = 0; i < n; i++) {
        sum += nums[i];
        pre.push(sum);
    }
    // console.log(pre);
    let ans = [];
    for (let i = 0; i < queries.length; i++) {
        let index = bisectLeft(pre, queries[i]);
        // console.log(i, queries[i], index);
        ans.push(bisectLeft(pre, queries[i]));
    }
    
    return ans;
};

function bisectLeft (arr, target) {
    const n = arr.length;
    let lo = 0;
    for (let i = 0; i < n; i++) {
        if (target < arr[i]) {
            return lo;
        } else if (target == arr[i]) {
            return lo + 1;
        }
        lo++;
    }
    return lo;
}


console.log(answerQueries([4,5,2,1], [3,10,21]));
console.log(answerQueries([2,3,4,5], [1]));