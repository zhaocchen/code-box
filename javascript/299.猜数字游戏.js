/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let a = 0
    let b = 0
    let skeep = [];
    let gkeep = [];
    // get bulls
    for (let index in guess) {
        if(secret[index] == guess[index]) {
            a++
        } else {
            skeep.push(secret[index]);
            gkeep.push(guess[index])
        }
    }
    // console.log(secret, guess)
    // get cows
    for (let j in gkeep) {
        var indexOf = skeep.indexOf(gkeep[j])
        if (indexOf > -1) {
            b++;
            skeep[indexOf] = null
        }
    }
    return `${a}A${b}B`
};

var testData = [
    { data: ["1807", "7810"], res: "1A3B"},
    { data: ["1123", "0111"], res: "1A1B"},
    { data: ["11", "11"], res: "2A0B"},
]

for (let v of testData) {
    const {data, res} = v
    const curRes = getHint(data[0], data[1])
    console.log(curRes, curRes == res)
}
// @lc code=end

