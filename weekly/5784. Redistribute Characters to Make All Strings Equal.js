/**
 * @param {string[]} words
 * @return {boolean}
 */
 var makeEqual = function(words) {
    let n = words.length;
    let letters = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for (let str of words) {
        for (let i = 0; i < str.length; ++i) {
            ++letters[str.charCodeAt(i) - base];
        }
    }

    for (let i = 0; i < letters.length; ++i) {
        if (letters[i] % n != 0) {
            return false;
        }
    }
    return true;
};

console.log(makeEqual(["abc","aabc","bc"]));
console.log(makeEqual(["ab","a"]));
console.log(makeEqual(["b"]));
// true
// false
// true