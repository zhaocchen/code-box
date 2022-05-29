/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
    let count = 0;
    let total = s.length;
    for (let i of s) {
        if (i === letter) count++;
    }
    return Math.floor(count / total * 100);
};


console.log(percentageLetter("foobar", "o"));