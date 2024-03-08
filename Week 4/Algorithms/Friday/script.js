function fibonacci(num) {
  let firstNum = 0;
  let secondNum = 1;
  let thirdNum;
  for (let i = 1; i <= num; i++) {
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return firstNum;
}

console.log(fibonacci(43));
