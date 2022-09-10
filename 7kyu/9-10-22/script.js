// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
  let strArr = x.filter((n) => typeof n == "string");
  let intArr = x.filter((n) => typeof n == "number");
  let strSum = strArr.reduce((a, b) => +a + +b, 0);
  let intSum = intArr.reduce((a, b) => a + b, 0);
  return intSum - strSum;
}
