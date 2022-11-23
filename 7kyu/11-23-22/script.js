// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
  let ascii = [];
  for (let i = 0; i < x.length; i++) {
    ascii.push(x.charCodeAt(i));
  }
  let total1 = ascii.join('');
  let total1Arr = total1.split('');
  let total2Arr = [];
  for (let i = 0; i < total1Arr.length; i++) {
    if (total1Arr[i] == '7') {
      total2Arr.push('1');
    } else {
      total2Arr.push(total1Arr[i]);
    }
  }
  let total2 = total2Arr.join('');

  let total1Sum = total1
    .split('')
    .map((x) => +x)
    .reduce((a, b) => a + b, 0);
  let total2Sum = total2
    .split('')
    .map((x) => +x)
    .reduce((a, b) => a + b, 0);

  return total1Sum - total2Sum;
}
