const axios = require("axios");
const { param } = require("../routes/routes");

module.exports = {
  async getAlldata(req, res) {
    try {
      const response = await axios.get("http://localhost:3010");
      const allData = response.data;
      res.render("home", { allData: allData });
    } catch (error) {
      res.status(500).send("Error fetching all posts from frontend controller");
    }
  },
  async getNewArticle(req, res) {
    try {
      res.render("newArticle");
    } catch (error) {
      res
        .status(500)
        .send("Error getting new article page from front end controller");
    }
  },

  async post(req, res) {
    try {
      const { title, message } = req.body;
      console.log("Submitted data:", { title, message });
      await axios.post("http://localhost:3010/post", { title, message });
      res.redirect("/feed");
    } catch (err) {
      console.log(
        "Problem with posting from front end controller",
        err.message
      );
    }
  },
  async getArticle(req, res) {
    try {
      const id = req.params._id;
      const response = await axios.get(
        `http://localhost:3010/be/article/${id}`
      );
      const article = response.data;
      console.log(article);
      res.render("article", { article: article });
    } catch (error) {
      res.status(500).send("Error getting article from front end controller");
    }
  },

  async deleteArticle(req, res) {
    try {
      const id = req.params._id;
      const response = await axios.delete(
        `http://localhost:3010/be/del/article/${id}`
      );
      res.redirect("/feed");
    } catch (error) {
      res.status(500).send("Error deleting from frontend controller");
    }
  },

  async editingArticle(req, res) {
    try {
      const id = req.params._id;
      const response = await axios.get(
        `http://localhost:3010/be/article/${id}`
      );
      const post = response.data;
      res.render("edit", { post: post });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("error to get update page");
    }
  },

  async putArticle(req, res) {
    try {
      const id = req.params._id;
      const { title, message } = req.body;
      console.log("Submitted new data:", { title, message });
      await axios.put(`http://localhost:3010/put/post/${id}`, {
        title,
        message,
      });
      res.redirect(`/article/${id}`);
    } catch (err) {
      console.log("Problem with putting from frontend controller", err.message);
    }
  },
};
