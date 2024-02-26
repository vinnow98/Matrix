// 1
const arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

//arr is the array to search, a is the bottom number, b is the top number
function filterRange(arr, a, b) {
  let filteredArray = [];
  for (i of arr) {
    if (i >= a && i <= b) {
      filteredArray.push(i);
    }
  }
  return filteredArray;
}
// console.log(filtered);

// 2
const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };
const users = [john, pete, mary];
let names = [];

for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

console.log(names);

//3
function getAverageAge(arr) {
  let ageSum = 0;
  let numberOfUsers = arr.length;
  for (let i = 0; i < numberOfUsers; i++) {
    ageSum += arr[i].age;
  }
  return ageSum / numberOfUsers;
}
console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28
