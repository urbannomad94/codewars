// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let resultArr = [];
  let arr = String(n).split("");
  if (arr.includes("-")) {
    resultArr.push("-");
    arr.splice(0, 1);
  }
  let reverse = arr.reverse();
  reverse.forEach((num) => resultArr.push(num));
  return +resultArr.join("");
}
