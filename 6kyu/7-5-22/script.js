// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let arr = num.toString().split("");
  let exp = arr.length - 1;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 0) {
      exp--;
      continue;
    }
    arr2.push(`${(+arr[i] * 10 ** exp).toString()}`);
    exp--;
  }
  return arr2.join(" + ");
}
