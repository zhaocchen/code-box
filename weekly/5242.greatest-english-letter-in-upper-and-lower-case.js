/**
 * @param {string} s
 * @return {string}
 */
 var greatestLetter = function(s) {
    let couter = new Array(128).fill(false);
    for (let char of s) {
        couter[char.charCodeAt(0)] = true;
    }
    for (let i = 90; i >= 65; i--) {
        if (couter[i] && couter[i + 32]) return String.fromCharCode(i);
    }
    return '';
};

console.log(greatestLetter("AbCdEfGhIjK"));
console.log(greatestLetter("lEeTcOdE"));
console.log(greatestLetter("arRAzFif"));