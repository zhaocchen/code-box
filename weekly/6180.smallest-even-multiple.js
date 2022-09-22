/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    return n & 1 ? 2 * n : n;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));