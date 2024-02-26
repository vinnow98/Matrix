// 1

let user1 = {
  name: "John",
  years: 30,
};

let { name1, years, isAdmin = false } = user1;
// console.log(name1, years, isAdmin);

// 2
let ourPlanetName;
let currentVisitor;

// 3

// Result will be Hello,John. The function gives an alert which takes the variable phrase and the variable user and combines it. "Hello" is stored in phrase and "John" is stored in user so what is shown on the alert is Hello,John.

// 4
// let user = {}; This is an empty object
let user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
delete user.name;

// 5
// No, it doesnt work. Cant change anything with const

// 6

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

function addAllSalaries(obj) {
  sum = 0;
  for (let i in obj) {
    sum += obj[i];
  }
  return sum;
}

// console.log(addAllSalaries(salaries));

// 7
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
let a = 1;
let b = 2;
result = a + b < 4 ? "Below" : "Over";
// console.log(result);

// 8
let login = "Emploee";
let message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greetings"
    : login === ""
    ? "No login"
    : "";

// console.log(message);
