function sumAll(arr) {
  if (arr[0] > arr[1]) {
    let tempValue = arr[0];
    arr[0] = arr[1];
    arr[1] = tempValue;
  }
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([5, 10]));
