// 1
const sumAllWithCondition = () => {
  let sum = 0;
  for (let i = 200; i <= 2700; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      continue;
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
};

// 2
const shiftValue = (arr) => {
  let tempStorage = 0;
  for (let i = 0; i < arr.length; i++) {
    tempStorage = arr.splice(i, 1);
    arr.unshift(tempStorage);
  }
  return [].concat(...arr);
};

// 3
const fizzBuzz = () => {
  array = [];
  for (let i = 1; i <= 135; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
      array.push("FizzBuzz");
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  return array;
};

// 4
const fibonacciSequence = () => {
  let array = [0, 1];
  let i = 1;
  while (array[i] < 1000000) {
    array.push(array[i] + array[i - 1]);
    i++;
  }
  return array;
};

// 5
const removeNegative = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

//6
const censoredWord = "Program";
const array = ["Man", "I", "Love", "The", "Matrix", "Program"];
const censorWord = (arr, word) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      censoredLength = "";
      for (let j = 0; j < arr[i].length; j++) {
        censoredLength += "*";
      }
      arr.splice(i, 1, censoredLength);
    }
  }
  return arr;
};
