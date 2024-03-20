const autocompleteContainer = document.getElementById(
  "autocomplete-suggestions"
);
const dataContainer = document.getElementById("data-container");
const search = document.getElementById("search-value");

const apiKey = "AIzaSyCVQ6sM8x3wSacSlCB_4HHYcW47cbpESKg";

document.getElementById("load-data").addEventListener("click", () => {
  autocompleteContainer.innerHTML = "";
  dataContainer.innerHTML = "";
  if (search.value <= 0) {
    dataContainer.innerHTML = "Please input a word!";
    return;
  }
  fetch(
    `https://tenor.googleapis.com/v2/search?q=${search.value}&key=${apiKey}&limit=8`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response not ok!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.results.length <= 0) {
        dataContainer.innerHTML = "No results to show!";
      }
      for (let i = 0; i < data.results.length; i++) {
        dataContainer.innerHTML += `<img src="${data.results[i].media_formats.gif.url}">`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

search.addEventListener("input", function () {
  let query = search.value;
  autoComplete(query);
});

function autoComplete(query) {
  autocompleteContainer.innerHTML = "";
  fetch(
    `https://tenor.googleapis.com/v2/autocomplete?key=${apiKey}&client_key=my_test_app&q=${query}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let suggestions = data.results;
      for (let i = 0; i < suggestions.length; i++) {
        autocompleteContainer.innerHTML += `<div class="autocomplete-item">${suggestions[i]}</div>`;
      }
    });
}
