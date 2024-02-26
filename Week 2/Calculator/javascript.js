const question = document.getElementById("question");
const answer = document.getElementById("answer");
const buttons = document.querySelectorAll("button");
let operations = [];
let counter = 1;

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
      result = math.evaluate(joined);
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
