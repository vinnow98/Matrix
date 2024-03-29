const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://evinwoon:evinwoon@myfirstcluster.xeuitgh.mongodb.net/myTest?retryWrites=true&w=majority&appName=myFirstCluster"
  )
  .then(() => {
    console.log("database connected suppossedly");
  })
  .catch((err) => {
    console.log(err);
  });


//   "mongodb+srv://evinwoon:evinwoon@myfirstcluster.xeuitgh.mongodb.net/(name of collection)?retryWrites=true&w=majority&appName=myFirstCluster"