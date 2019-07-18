bigNumbers = arr => {
  const newNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if([i] > 5) {
      newNumbers.push(`Wow, ${arr[i]} is big`);
    }
  }
  return newNumbers;
};

module.exports = { bigNumbers };