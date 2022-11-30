// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

function explode(s) {
  let numArr = s.split('').map((x) => +x);
  let resultArr = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i]; j++) {
      resultArr.push(numArr[i]);
    }
  }
  return resultArr.join('');
}
