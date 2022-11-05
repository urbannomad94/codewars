// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

const disariumNumber = (n) => {
  const numArr = String(n).split('');
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += Math.pow(parseInt(numArr[i]), i + 1);
  }
  if (sum === n) {
    return 'Disarium !!';
  }
  return 'Not !!';
};
