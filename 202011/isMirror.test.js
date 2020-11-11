const func = require('./isMirror');

const testCases = [
  {case: 3, answer: true},
  {case: 121, answer: true},
  {case: 521, answer: false},
  {case: 12421, answer: true},
  {case: 13421, answer: false},
]

for (let i of testCases) {
    test(`adds ${i.case} to equal ${i.answer}`, () => {
        expect(func(i.case)).toBe(i.answer);
      });
}

// yarn run test ./202011/isMirror.test.js
