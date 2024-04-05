const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://evinwoon:evinwoon@myfirstcluster.xeuitgh.mongodb.net/assignment4?retryWrites=true&w=majority&appName=myFirstCluster"
  )
  .then(() => {
    console.log("database is connected!");
  })
  .catch((err) => {
    console.log("There is an error!", err);
  });
