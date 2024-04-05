const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const port = 3006;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(routes);

app.listen(port, () => {
  console.log(`Frontend Server is running on port ${port}`);
});
