const func = require('./addString');

const testCases = [
  {case: ['1', '2'], answer: '3'},
]

for(let i = 0; i < 30;i++) {
    const num1 = Math.floor(Math.random() * (10 ** 5))
    const num2 = Math.floor(Math.random() * (10 ** 5))
    testCases.push({case: [num1+'', num2+''], answer: num1+num2+''})
}

for (let i of testCases) {
    test(`adds ${i.case} to equal ${i.answer}`, () => {
        const params = i.case;
        expect(func(...params)).toBe(i.answer);
      });
}

