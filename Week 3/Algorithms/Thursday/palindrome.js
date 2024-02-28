const isPalindrome = (str) => {
  let halfStrLength = Math.floor(str.length / 2);
  let indexFromRight = str.length - 1;
  for (let i = 0; i < halfStrLength; i++) {
    if (str[i] != str[indexFromRight]) {
      return false;
    }
    indexFromRight--;
  }
  return true;
};
