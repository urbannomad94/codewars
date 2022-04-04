// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.toLowerCase().split("");
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i].toUpperCase());
    for (let j = 1; j <= i; j++) {
      resultArr.push(arr[i]);
    }
    if (i != arr.length - 1) {
      resultArr.push("-");
    }
  }
  return resultArr.join("");
}
