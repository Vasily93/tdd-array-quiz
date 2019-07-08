

const array = ['sky', 'hot', 'Yeti', 'green'];
function takeOutY() {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if([i].includes('y'||'Y')) {
      false;
    } else {
      newArray.push.word('Is it' + [i] + '?')
    }  
    return newArray;
  }
}

module.exports = takeOutY();