/**
 * @param {string} pattern
 * @return {string}
 */
 var smallestNumber = function(pattern) {
    const n = pattern.length;
    let ans = new Array(n).fill(0);
    let stack = Array.from({ length: n + 1 }, (v, i) => i + 1);
    console.log(stack);
    for (let i = 0; i < n; i++) {
        if (ans[i]) continue;
        if (pattern[i] == 'I' && (i == n - 1 || pattern[i + 1] == "I")) {
            ans[i] = stack.shift();
            continue;
        }
        
    }
    //     const c = pattern[i];
    //     if (c === 'D') {
    //         continue;
    //     }
    //     for (let j = 0; j < n; j++) {
    //         if (ans[j] === 0) {
    //             ans[j] = 1;
    //             break;
    //         }
    //     }
    // }
    console.log(ans);
    // return ans.join('');
};

console.log(smallestNumber("IIIDIDDD"));