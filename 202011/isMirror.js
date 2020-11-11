// function isMirror (val) {
//     if (val < 10) return true;
//     const endNum = val % 10;
//     const count = (val + '').length - 1;
//     const startNum = Math.floor(val / (10 ** count));
//     // console.log(val, endNum, startNum)
//     if (endNum != startNum) return false;
//     return isMirror(Math.floor((val % (10 ** count)) / 10) )
// }

function isMirror (val) {
    let newVal = 0;
    let oldVal = val;
    while (oldVal) {
        newVal = newVal * 10 + oldVal % 10;
        oldVal = parseInt(oldVal / 10)
    }
    return newVal == val;
}


console.log(isMirror(1321))

module.exports = isMirror;