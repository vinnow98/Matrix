const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
route.get("/", controller.homePage);
route.post("/post", controller.post);
route.delete("/del/user/:_id", controller.deleteData);
route.get("/get/post/:_id", controller.findData);
route.put("/update/post/:_id", controller.updateData);
route.post("/post/comment/:_id", controller.newComment);
route.get("/comment/:_id", controller.getComments);
route.post("/post/signup/", controller.postSignup);
route.post("/post/login", controller.postLogin);
module.exports = route;