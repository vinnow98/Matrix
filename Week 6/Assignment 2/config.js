const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://evinwoon:evinwoon@myfirstcluster.xeuitgh.mongodb.net/"
  )
  .then(() => {
    console.log("database connected suppossedly");
  })
  .catch((err) => {
    console.log(err);
  });
