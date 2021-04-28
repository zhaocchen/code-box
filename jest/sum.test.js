const func = require('./sum');

const testCases = [
  {case: [1, 2], answer: 3},
  {case: [3, 3], answer: 6},
]

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

for (let i of testCases) {
    test(`adds ${i.case} to equal ${i.answer}`, () => {
        expect(func(1, 2)).toBe(3);
      });
}

