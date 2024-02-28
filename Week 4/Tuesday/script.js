const findLongestWord = (string) => {
  let splitString = string.split(" ");
  let longestString = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longestString) {
      longestString = splitString[i].length;
    }
  }
  return longestString;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
