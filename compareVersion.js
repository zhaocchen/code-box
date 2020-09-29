// Semantic Versioning 是一个前端通用的版本规范
// 格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”
// 1. 当 a > b 是返回 1；
// 2. 当 a = b 是返回 0；
// 3. 当 a < b 是返回 -1；

// '2.3.0-beta.1' 解析 [ 2, 3, 0, 1, 1 ]
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let testMap = new Map([
        ['alpha', 0],
        ['beta', 1],
        ['rc', 2]
    ])
    const v1 = version1.split(/\.|\-/).map(d => isNaN(parseInt(d)) ? testMap.get(d) : parseInt(d))
    const v2 = version2.split(/\.|\-/).map(d => isNaN(parseInt(d)) ? testMap.get(d) : parseInt(d))
    // console.log(v1, v2)
    let n = Math.max(v1.length, v2.length)
    for (let i = 0; i < n; i++) {
        let a = v1[i]
        let b = v2[i]
        if (i > 2) {
            if (a == undefined) return 1
            if (b == undefined) return -1
        }
        if (a != b) {
            return a > b ? 1 : -1
        }
    }
    return 0
};

console.log(compareVersion('1.3.0', '2.3.0-beta.1'))