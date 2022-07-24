/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    let counts = new Array(128).fill(0);
    for (let c of s) {
        let idx = c.charCodeAt(0);
        if (counts[idx] === 1) return c;
        counts[idx]++;
    }
};

console.log(repeatedCharacter("abccbaacz"));