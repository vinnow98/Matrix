// 1
// const age = 18;
// const checkAge = () =>
//   age > 18 ? true : "Do you have your parents permission to access this page?";

// console.log(checkAge());

// 2
// function pow(base, exp) {
//   if (exp < 1) {
//     return false;
//   }
//   return base ** exp;
// }
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

// 3

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You canceled the execution.");
//   }
// );

// 4
// consst calculator = {
//   continue: true,
//   read: function () {
//     this.a = prompt("first number?");
//     this.b = prompt("second number?");
//     if (isNaN(this.a) || isNaN(this.b)) {
//       alert("Please input numbers only!");
//       this.continue = false;
//     }
//   },
//   a: 0,
//   b: 0,
//   sum: function () {
//     return Number(this.a) + Number(this.b);
//   },
//   mul: function () {
//     return Number(this.a) * Number(this.b);
//   },
// };

// calculator.read();
// if (calculator.continue) {
//   alert(calculator.sum());
//   alert(calculator.mul());
// }

// 5
// const min = (a, b) => (a < b ? a : b);
// console.log(min(7, 4));
