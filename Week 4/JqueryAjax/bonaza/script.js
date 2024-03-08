const loremIpsumWords = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
];

function randomLoremWord() {
  let randomNum = Math.floor(Math.random() * loremIpsumWords.length - 1);
  let randomLorem = loremIpsumWords[randomNum];
  return randomLorem;
}
$(".append").click(function () {
  $(".text-append").append(` ${randomLoremWord()}`);
});

$(".btn-html").click(function () {
  $(".text-html").html(randomLoremWord());
});

$(".btn-hover.toggle").hover(function () {
  $(".element-hover").toggle();
});

$(".btn-hover.slide").hover(function () {
  $(".element-hover").slideToggle();
});
$(".btn-hover.fade").hover(function () {
  $(".element-hover").fadeToggle();
});
// .click
// .addClass
// .append
// .html
// .text
// .val
// .hide
// .show
// .slideDown
