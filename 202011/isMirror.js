function isMirror (val) {
    if (val < 10) return true;
    const endNum = val % 10;
    const count = (val + '').length - 1;
    const startNum = Math.floor(val / (10 ** count));
    // console.log(val, endNum, startNum)
    if (endNum != startNum) return false;
    return isMirror(Math.floor((val % (10 ** count)) / 10) )
}


console.log(isMirror(1321))

module.exports = isMirror;