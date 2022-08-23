// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

const cubeOdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      return undefined;
    }
  }

  let sum = 0;
  let cubedArr = arr.map((n) => n * n * n);
  let oddArr = cubedArr.filter((n) => n % 2 === 1 || n % 2 === -1);
  oddArr.forEach((n) => (sum += n));
  return sum;
};
