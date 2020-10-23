function addString(s1, s2) {
    let nums1 = s1.split('').map(d => parseInt(d));
    let nums2 = s2.split('').map(d => parseInt(d));
    let res = [];
    let tmp = 0;
    while(nums1.length || nums2.length) {
        let num1 = nums1.pop() || 0;
        let num2 = nums2.pop() || 0;
        let sum = num1 + num2 + tmp;
        if (sum > 9) {
            sum -= 10;
            tmp = 1;
        } else {
            tmp = 0;
        }
        res.unshift(sum)
    }
    if (tmp) res.unshift(tmp);
    return res.join('');
}

// yarn run test /math/addString

module.exports = addString