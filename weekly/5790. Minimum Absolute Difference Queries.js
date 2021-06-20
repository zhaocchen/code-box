/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var minDifference = function(nums, queries) {
    let ans = [];
    let hasMap = new Map();
    for (let [start, end] of queries) {
        let list = [...new Set(nums.slice(start, end + 1))].sort((a, b) => a - b);
        let key = list.join(',');
        if (!hasMap.has(key)) {
            hasMap.set(key, minAbs(list))
        }
        ans.push(hasMap.get(key));
    }
    return ans;
};

function minAbs(nums) {
    let ans = Infinity;
    for (let i = 1; i < nums.length; ++i) {
        let abs = Math.abs(nums[i] - nums[i - 1]);
        if (abs != 0) {
            ans = Math.min(ans, abs);
        }
    }
    return ans == Infinity ? -1 : ans;
}

// console.log(minAbs([2,2]));
// console.log(minAbs([2,7,10]));
// console.log(minAbs([1,3,4,8]));
// -1
// 3
// 1
console.log(minDifference([1,3,4,8], [[0,1],[1,2],[2,3],[0,3]]));
console.log(minDifference([4,5,2,2,7,10], [[2,3],[0,2],[0,5],[3,5]]));

// [ 2, 1, 4, 1 ]
// [ -1, 1, 1, 3 ]

// 超出时间限制 ???