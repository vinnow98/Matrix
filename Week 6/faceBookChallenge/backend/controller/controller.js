const Post = require("../model/post");

module.exports = {
  async homePage(req, res) {
    try {
      const allData = await Post.getAllData();
      res.json(allData);
    } catch (error) {
      console.log("Error getting all data at controller!", error.message);
      res.status(500).json({ error: "Error getting data at controller" });
    }
  },

  async post(req, res) {
    try {
      const { title, message } = req.body;
      const createdPost = await Post.postData(title, message);
      res.json(createdPost);
    } catch (err) {
      console.log("Error posting!", err.message);
      res.status(500).json({ error: "Error posting data at controller" });
    }
  },
  async getArticle(req, res) {
    try {
      const id = req.params._id;
      const article = await Post.getArticle(id);
      res.json(article);
    } catch (error) {
      console.log(
        "Error getting article at backend controller!",
        error.message
      );
      res.status(500).json({ error: "Error getting data at controller" });
    }
  },
  async deleteArticle(req, res) {
    try {
      const id = req.params._id;
      const article = await Post.deleteArticle(id);
      res.json(article);
    } catch (error) {
      console.log(
        "Error deleting article at backend controller!",
        error.message
      );
      res.status(500).json({ error: "Error getting data at controller" });
    }
  },

  async putArticle(req, res) {
    try {
      const id = req.params._id;
      const { title, message } = req.body;
      const article = await Post.putArticle(id, title, message);
      res.json(article);
    } catch (error) {
      console.log(
        "Error putting article at backend controller!",
        error.message
      );
    }
  },
};
