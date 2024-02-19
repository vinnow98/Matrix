// 1.1
function checkAge(age) {
  if (age >= 18) {
    console.log("You're old enough to vote!");
  } else {
    console.log("You have to wait", 18 - age, "more year(s)!");
  }
}
// let myAge = 18;
// checkAge(myAge);

// 1.2
function checkForJohn() {
  let name = prompt("What is your name?");
  if (name.toUpperCase() == "JOHN") {
    console.log("Hello, John!");
  } else {
    console.log("You are not John.");
  }
}
// checkForJohn();

// 2.1
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
// addNumbers(2,3)

// 2.2
function reverseString(string) {
  reversedString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join("");
}
// console.log(reverseString("hello"));

// 3.1
let favFruits = ["apple", "orange", "banana"];

for (i = 0; i < favFruits.length; i++) {
  //   console.log(favFruits[i]);
}

// 3.2
let numberArray = [5, 19, 31, 200, 4];

function averageNumbers(numbers) {
  let totalNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i];
  }
  let averageNumber = totalNumber / numbers.length;
  return averageNumber;
}
// console.log(averageNumbers(numberArray));

// 3.3
function findLargestNumber(numbers) {
  let largestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}
// console.log(findLargestNumber(numberArray));

let sentenceArray = ["Hi", "my", "name", "is", "Johnny."];

function concatenateArray(sentenceArray) {
  concatenatedSentence = "";
  for (let i = 0; i < sentenceArray.length; i++) {
    concatenatedSentence += sentenceArray[i] + " ";
  }
  return concatenatedSentence;
}
// console.log(concatenateArray(sentenceArray));

// 3.5
let nameArray = ["John", "Mary", "Susan", "Ramesh"];

let nameToFind = "Mary";

function findName(nameArray, nameToFind) {
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i] == nameToFind) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}
// console.log(findName(nameArray, nameToFind));

// 3.6
function listEvenNumbers() {
  evenNumbers = [];
  for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// console.log(listEvenNumbers());

// 4.1
book = {
  title: "Lord of the rings",
  author: "J.RR Tolkien",
  year: 1938,
};

// console.log(book.title, book.author, book.year);

// 4.2
person = {
  name: "John",
  age: 20,
  gender: "M",
};

function printInfo(person) {
  console.log("Name: ", person.name);
  console.log("Age: ", person.age);
  console.log("Gender: ", person.gender);
}

// printInfo(person);

// 5
car = {
  make: "Honda",
  model: "Civic",
  year: 1929,
  startCar: function () {
    console.log("Car is started!");
  },
  driveCar: function () {
    console.log("Car is driving!");
  },
};

// car.startCar();
// car.driveCar();

// 6.1
// window.alert("Alert!");

// 6.2
function promptAndAlert() {
  let name = prompt("What is your name?");
  alert("Hello " + name + "!");
}

// promptAndAlert();

// 7.1
let textToBeChanged = document.getElementsByClassName("changeText");

function changeText() {
  textToBeChanged[0].textContent = "This text is now changed!";
}

// 7.2

function addItem() {
  let newItem = document.getElementById("add-items").value;

  let newTextNode = document.createTextNode(newItem);
  let newli = document.createElement("li");
  newli.appendChild(newTextNode);

  let todoitems = document.getElementById("todoitems");
  todoitems.appendChild(newli);
  document.getElementById("add-items").value = "";
}

let counter = 0;
function changeImage() {
  let imageArray = [
    " https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "   https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    " https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  let currentSelector = counter % 3;
  document.getElementById("imgsrc").src = imageArray[currentSelector];
  counter += 1;
}

function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "John" && password == "password") {
    alert("You are logged in!");
  } else {
    alert("You are not logged in!");
  }
}
