const express = require("express");
const route = express.Router();
const funcController = require("../controller/funcController");

route.get("/", funcController.getHomePage);
route.get("/posts", funcController.getAbout);
route.get("/samplePost", funcController.getSampleFunction);

module.exports = route;
