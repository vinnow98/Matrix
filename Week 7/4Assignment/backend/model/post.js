const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postText: {
    type: String,
    required: true,
  },
});
const data = mongoose.model("post", postSchema);

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  postID: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("comment", commentSchema);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = {
  async getData() {
    const alldata = await data.find();
    return alldata;
  },
  async postData(title, postText) {
    const createdPost = await data.create({
      title: title,
      postText: postText,
    });
    return createdPost;
  },
  async delData(id) {
    const myData = await data.findByIdAndDelete(id);
    return myData;
  },
  async findData(id) {
    const myData = await data.findById(id);
    console.log(myData);
    return myData;
  },
  async updateData(id, title, postText) {
    const myData = await data.findByIdAndUpdate(id, {
      title: title,
      postText: postText,
    });
    return myData;
  },
  async postComment(comment, id) {
    const newComment = await Comment.create({
      comment: comment,
      postID: id,
    });
    return newComment;
  },
  async getComment(postId) {
    const commentsByPostID = await Comment.find({ postID: postId });
    console.log(commentsByPostID);
    return commentsByPostID;
  },
  async newUser(username, password) {
    const newUser = await User.create({
      username: username,
      password: password,
    });
    return newUser;
  },
  async checkUser(username) {
    const checkUser = await User.findOne({
      username: username,
    });
    return checkUser;
  },
};
