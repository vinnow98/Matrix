const titleCase = (str) => {
  if (str[0] == " " || str[str.length - 1] == " ") {
    return "There should not be a space at the beginning or end!";
  }
  const wordArray = str.split(" ");
  for (i in wordArray) {
    wordArray[i] =
      wordArray[i][0].toUpperCase() + wordArray[i].slice(1).toLowerCase();
  }
  const joinedArray = wordArray.join(" ");
  return joinedArray;
};

console.log(
  titleCase("Sasdsad sadsa ASD d d d qejfnuqef qjnf qEFQF qfQEFQEFQEF")
);
