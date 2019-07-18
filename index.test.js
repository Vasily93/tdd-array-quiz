const { bigNumbers } = require('./index');

describe('testing function', () => {
  it('takes digits greater then 5', () => {
    const numbers = [1, 3, 5, 7, 2];
    const newNumbers = bigNumbers(numbers);

    expect(newNumbers).toEqual([
      'Wow, 7 is big!'
    ]);
  });
});
