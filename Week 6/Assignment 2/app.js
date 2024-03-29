const express = require("express");
const app = express();
const routes = require("./routes/routes");
require("./config");
const port = 3002;

app.set("view engine", "ejs");

app.use(routes);
app.listen(port, () => {
  console.log("server is running");
});
;