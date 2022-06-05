/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
 var arrayChange = function(nums, operations) {
    const n = nums.length;
    let map = new Map(nums.map((v, i) => [v, i]));
    for (let [oldVal, newVal] of operations) {
        let idx = map.get(oldVal);
        map.delete(oldVal);
        map.set(newVal, idx);
    }
    let ans = new Array(n);
    for (let [val, key] of map.entries()) {
        ans[key] = val;
    }
    // console.log(map);
    return ans;
};

console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]]));
console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));