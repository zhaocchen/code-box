/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    let encodeMap = new Map();
    const m = key.length; n = 26;
    for (let i = 0, j = 0; i < m; i++) {
        let char = key.charAt(i);
        if (char != ' ' && !encodeMap.has(char)) {
            encodeMap.set(char, String.fromCharCode(j + 97));
            j++;
        }
    }
    let ans = [];
    for (let char of message) {
        ans.push(char == ' ' ? ' ' : encodeMap.get(char));
    }
    return ans.join('');
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"));