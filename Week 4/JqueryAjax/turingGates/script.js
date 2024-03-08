$("img").click(function () {
  const altpic = $(this).attr("altpic");
  $(this).attr("src", altpic);
});
