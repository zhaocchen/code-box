const func = require('./chineseToInt');

const testCases = [
  {case: '五', answer: 5},
  {case: '二十', answer: 20},
  {case: '四百七', answer: 407},
  {case: '四百零七', answer: 407},
  {case: '三亿', answer: 300000000},
  {case: '九亿八千七百六十五万四千三百二十一', answer: 987654321},
  {case: '二千亿零一百零一万零二百', answer: 200001010200},
]

for (let i of testCases) {
    test(`adds ${i.case} to equal ${i.answer}`, () => {
        expect(func(i.case)).toBe(i.answer);
      });
}