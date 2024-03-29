const mongoose = require("mongoose");
const Feed = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const feed = mongoose.model("post", Feed);

module.exports = {
  async getAllData() {
    const alldata = await feed.find();
    return alldata;
  },
  async postData(title, message) {
    const createdPost = await feed.create({
      title: title,
      message: message,
    });
    return createdPost;
  },
  async getArticle(id) {
    const article = await feed.findById(id);
    return article;
  },
  async deleteArticle(id) {
    const article = await feed.findByIdAndDelete(id);
    return article;
  },
  async putArticle(id, title, message) {
    const article = await feed.findByIdAndUpdate(id, {
      title: title,
      message: message,
    });
    return article;
  },
};
