
/**
 * 中文数字转数字
 * @param {*} s 
 */
function chineseToInt(s) {
    const numMap = {
        '零': 0,
        '一': 1,
        '二': 2,
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9,
    }
    const unitMap = {
        '十': 10 ** 1,
        '百': 10 ** 2,
        '千': 10 ** 3,
        '万': 10 ** 4,
        '亿': 10 ** 8,
    }
    const units = Object.keys(unitMap);
    let res = 0;
    let tmp = 0;
    for (let i= 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char == '零') continue;
        if (['亿', '万'].includes(char)) {
            res += tmp * unitMap[char];
            tmp = 0;
        } else {
            const next = s.charAt(i + 1);
            if (next && !['亿', '万'].includes(next)) {
                tmp += numMap[char] * unitMap[next];
                i++;
            } else {
                tmp += numMap[char]
            }
        }
    }
    res += tmp
    return res
}

// console.log(chineseToInt('二十'))

module.exports = chineseToInt;
