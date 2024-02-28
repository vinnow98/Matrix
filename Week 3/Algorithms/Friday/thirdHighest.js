// // array of the first 3 numers
// //if next in arr is higher than lowest in array, replace it
// //at the end, just return the lowest
const thirdHighest = (arr) => {
  if (arr.length < 3) {
    return "Array has to be longer than 3 numbers!";
  }
  let topThree = [arr[0], arr[1], arr[2]];
  if (arr.length > 3) {
    for (let i = 3; i < arr.length; i++) {
      let smallestOfTopThree = Math.min(...topThree);
      if (arr[i] > smallestOfTopThree) {
        topThree.splice(topThree.indexOf(smallestOfTopThree), 1, arr[i]);
      }
    }
  }
  return Math.min(...topThree);
};
