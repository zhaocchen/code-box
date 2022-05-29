/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
 var discountPrices = function(sentence, discount) {
    const sell = (100 - discount) / 100;
    let reg = new RegExp(/^(\$)(([1-9]\d*\.?\d*)|(0\.\d*))$/g);
    let arr = sentence.split(' ').map(d => {
        if (!reg.test(d)) return d;
        return d.replace(reg, (s, $1, $2) => {
            return `$${(sell * $2).toFixed(2)}`;
        });
    });
    return arr.join(' ');
};

console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", 100));