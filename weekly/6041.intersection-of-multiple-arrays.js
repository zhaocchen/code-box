var intersection = function(nums) {
    const n = nums.length;
    let ans = new Set(nums[0]);
    // console.log(ans.size);
    for (let i = 1; i < n && ans.size; i++) {
        const arr1 = nums[i];
        const arr2 = Array.from(ans);
        for (let num of arr2) {
            if (!arr1.includes(num)) {
                ans.delete(num);
            }
        }
    }
    return Array.from(ans).sort((a, b) => a - b);
};


console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));
console.log(intersection([[1,2,3],[4,5,6]]));