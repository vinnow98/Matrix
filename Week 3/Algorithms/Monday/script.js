// 1
const print1to135 = () => {
  for (let i = 1; i <= 135; i++) {
    console.log(i);
  }
};

// 2
const printOdd1to135 = () => {
  for (let i = 1; i <= 135; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
};

// 3
const printSum1to135 = () => {
  let sum = 0;
  for (let i = 1; i <= 135; i++) {
    sum += i;
    console.log(`Number is: ${i}, Sum is ${sum}`);
  }
};

// 4
const printArray = (arr) => {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// 5
const findMax = (arr) => {
  let currentValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentValue) {
      currentValue = arr[i];
    }
  }
  return currentValue;
};

// 6
const findAverage = (arr) => {
  const arrayLength = arr.length;
  let sum = 0;
  for (let i = 0; i < arrayLength; i++) {
    sum += arr[i];
  }
  return sum / arrayLength;
};

// 7
const elminateNegativeWithZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      arr[i] = 0;
    }
  }
  return arr;
};

// 8
const elminateNegativeWithTuring = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Turing";
    }
  }
  return arr;
};
