const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const post = mongoose.model("person", postSchema);

module.exports = {
  async postFunction() {
    const randomVar = await post.find();
    console.log("Getting everything");
    return randomVar;
  },
  async postFunction2() {
    const createdPost = await post.create({
      title: "matrix",
      text: "1984",
    });
    console.log("posting something");
    return createdPost;
  },
};
