const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    name: "Michael Choi",
    createdAt: "23-01-2013",
    message:
      "This is my message    This is my message This is my message This is my messageThis is my message",
  },
  {
    name: "Evin",
    createdAt: "23-03-2024",
    message:
      "This is my message    This is my message This is my message This is my messageThis is my message",
  },
];

app.set("view engine", "ejs");
app.get("/posts", (req, res) => {
  res.render("posts", { stuff: data });
});

app.listen(port, () => {
  console.log("server is running");
});
