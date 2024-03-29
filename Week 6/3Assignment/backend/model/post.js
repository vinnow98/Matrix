const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  username: {
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

module.exports = {
  async getData() {
    const alldata = await data.find();
    return alldata;
  },
  async postData(username, postText) {
    const createdPost = await data.create({
      username: username,
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
  async updateData(id, username, postText) {
    const myData = await data.findByIdAndUpdate(id, {
      username: username,
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
};
