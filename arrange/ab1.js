
function arrange(arr) {
    var res = [];
    for (let i of arr[0]) {
        for (let j of arr[1]) {
            for (let k of arr[2]) {
                res.push(i + j + k);
            }
        }
    }
    return res;
}


var testArr =[['A','B'],['a','b'],[1,2]]
// Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2

console.log(arrange(testArr))

