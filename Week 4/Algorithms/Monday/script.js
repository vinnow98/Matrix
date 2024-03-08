function largestOfFour(arr) {
  let finalOutput = [];
  for (let i = 0; i < arr.length; i++) {
    let highestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > highestNumber) {
        highestNumber = arr[i][j];
      }
    }
    finalOutput.push(highestNumber);
  }
  return finalOutput;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//Returns [5,27,39,1001]
