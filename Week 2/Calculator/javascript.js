let operations = [];
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let counter = 1;

let btn = document.getElementsByTagName("button");
let buttons = Array.from(btn);

buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    counter = 0;
    operations.push(e.target.getAttribute("data-index"));
    joined = operations.join("");
    question.innerHTML = `${joined}`;
  });
});

function findResult() {
  if (counter == 0) {
    joined = operations.join("");
    try {
      result = eval(joined);
      answer.innerHTML = result;
      operations = [];
      counter += 1;
    } catch (error) {
      answer.innerHTML = "Error";
    }
  } else {
    clearAll();
  }
}

function clearAll() {
  operations = [];
  question.innerHTML = "";
  answer.innerHTML = "";
}
