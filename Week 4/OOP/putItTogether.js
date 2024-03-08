class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce = function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

const person1 = new Person("John", 25);
function describePerson(callback) {
  return callback.introduce();
}

console.log(describePerson(person1));

function wait(time) {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("Success"));
    }, time);
  });
  return myPromise;
}

wait(1000);
