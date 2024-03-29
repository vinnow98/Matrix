const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
route.get("/", controller.homePage);
route.post("/post", controller.post);
route.get("/be/article/:_id", controller.getArticle);
route.delete("/be/del/article/:_id", controller.deleteArticle);
// route.get("/update/user/:_id", controller.findData);
route.put("/put/post/:_id", controller.putArticle);

module.exports = route;
