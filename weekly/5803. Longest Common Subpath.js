// ？
var longestCommonSubpath = function(n, paths) {
    let ans = 0;
    console.log(n, paths);
};

function getMinNums(nums) {
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i].length < nums[ans]) {
            ans = i;
        }
    }
    return ans;
}

function getIndexs(nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            ans.push(i);
        }
    }
    return ans;
}

console.log(longestCommonSubpath(5, [[0,1,2,3,4],
    [4,3,2,1,0]]));