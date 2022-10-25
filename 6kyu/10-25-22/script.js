function kebabize(str) {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arr = str.split('');
  let holder = [];
  for (let i = 0; i < arr.length; i++) {
    if (nums.includes(arr[i])) {
      continue;
    } else {
      holder.push(arr[i]);
    }
  }
  let holderStr = holder.join('');
  let arr2 = holderStr.split(/(?=[A-Z])/);
  return arr2.join('-').toLowerCase();
}
