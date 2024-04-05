const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/routes");
require("./config");
const port = 3005;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`Backend Server is running on port ${port}`);
});
