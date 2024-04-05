const Post = require("../model/post");
const bcrypt = require("bcrypt");

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

  async post(req, res) {
    try {
      const { title, postText } = req.body;
      const createdPost = await Post.postData(title, postText);
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
    await Post.updateData(req.params._id, req.body.title, req.body.postText)
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
  async postSignup(req, res) {
    try {
      const { username, password } = req.body;
      console.log("backend problem?");
      hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await Post.newUser(username, hashedPassword);
      res.json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ error: `Error posting data from backend ${error.message}` });
    }
  },
  async postLogin(req, res) {
    try {
      const { username, password } = req.body;
      const newUser = await Post.checkUser(username);

      // Check if user exists
      if (!newUser) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, newUser.password);
      if (passwordMatch) {
        // Passwords match, send a success response
        res.status(200).json({ success: true });
      } else {
        // Passwords don't match, send an error response
        res.status(401).json({ error: "Invalid username or password" });
      }
    } catch (error) {
      // Handle errors
      res
        .status(500)
        .json({ error: `Error checking user from backend: ${error.message}` });
    }
  },
};
