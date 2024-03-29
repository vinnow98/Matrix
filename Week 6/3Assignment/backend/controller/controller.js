const Post = require("../model/post");

module.exports = {
  async homePage(req, res) {
    await Post.getData()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log("Error getting all data!", err);
      });
  },

  // async post(req, res) {
  //   await Post.postData()
  //     .then((result) => {
  //       res.json(result);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log("Error posting!", err);
  //       res.status(500).json({ error: "Error posting data" });
  //     });
  // },
  async post(req, res) {
    try {
      const { username, postText } = req.body;
      const createdPost = await Post.postData(username, postText);
      res.json(createdPost);
    } catch (err) {
      console.log("Error posting!", err);
      res.status(500).json({ error: "Error posting data" });
    }
  },
  async deleteData(req, res) {
    await Post.delData(req.params._id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log("Error deleting on backend", err);
      });
  },
  async findData(req, res) {
    await Post.findData(req.params._id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  },
  async updateData(req, res) {
    console.log(req.body);
    await Post.updateData(req.params._id, req.body.username, req.body.postText)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log("Error updating on backend", err.message);
      });
  },
  async newComment(req, res) {
    try {
      const comment = req.body.comment;
      const id = req.params._id;
      const myComment = await Post.postComment(comment, id);
      res.json(myComment);
    } catch (err) {
      console.log(err.message);
    }
  },
  async getComments(req, res) {
    try {
      const id = req.params._id;
      const getComments = await Post.getComment(id);
      res.json(getComments);
    } catch (error) {
      console.log(error.message);
    }
  },
};
