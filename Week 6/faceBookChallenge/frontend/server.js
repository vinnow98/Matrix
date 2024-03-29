const express = require("express");
const app = express();
const cors = require("cors");
const port = 3011;

const routes = require("./routes/routes");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(routes);

app.listen(port, () => {
  console.log(`Frontend Server is running on port ${port}`);
});
