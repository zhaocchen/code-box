/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
 var checkDistances = function(s, distance) {
    const n = s.length;
    let hashMap = new Map();
    for (let i = 0; i < n; i++) {
        let c = s.charAt(i);
        if (!hashMap.has(c)) {
            hashMap.set(c, i);
            continue;
        }
        if (i - hashMap.get(c) - 1 != distance[c.charCodeAt(0) - 'a'.charCodeAt(0)]) return false;
    }
    return true;
};


console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
console.log(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));