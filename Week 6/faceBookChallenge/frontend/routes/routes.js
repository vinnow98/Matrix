const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
route.get("/feed", controller.getAlldata);
route.get("/newarticle", controller.getNewArticle);
route.post("/post", controller.post);
route.get("/article/:_id", controller.getArticle);
route.get("/del/post/:_id", controller.deleteArticle);
route.get("/get/post/:_id", controller.editingArticle);
route.post("/put/post/:_id", controller.putArticle);
module.exports = route;
