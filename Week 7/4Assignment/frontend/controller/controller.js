const axios = require("axios");

async function getAlldata(req, res) {
  try {
    const response = await axios.get("http://localhost:3005");
    const allData = response.data;

    for (let i = 0; i < allData.length; i++) {
      const responseComments = await axios.get(
        `http://localhost:3005/comment/${allData[i]._id}`
      );
      const commentsData = responseComments.data;
      allData[i]["comments"] = commentsData;
    }
    res.render("home", { allData: allData });
  } catch (error) {
    res
      .status(500)
      .send("Error fetching all posts from frontend controller", error.message);
  }
}
module.exports = {
  getAlldata,
  async newPost(req, res) {
    console.log(req.body);
    try {
      const { title, postText } = req.body;
      console.log("Submitted data:", { title, postText });
      await axios.post("http://localhost:3005/post", { title, postText });
      res.redirect("/");
    } catch (error) {
      console.log("Problem with posting from front end |", error.message);
    }
  },

  async delPost(req, res) {
    try {
      const response = await axios.delete(
        `http://localhost:3005/del/user/${req.params._id}`
      );
      res.redirect("/");
    } catch (error) {
      res.status(500).send("Error deleting from front end |", error.message);
    }
  },
  async getPost(req, res) {
    try {
      const response = await axios.get(
        `http://localhost:3005/get/post/${req.params._id}`
      );
      const data = response.data;
      res.render("edit", { response: data });
    } catch (error) {
      res.status(500).send("error to get update page |", error.message);
    }
  },
  async updatePost(req, res) {
    try {
      const { title, postText } = req.body;
      console.log("Submitted new data:", { title, postText });
      const id = req.params._id;
      await axios.put(`http://localhost:3005/update/post/${id}`, {
        title,
        postText,
      });
      res.redirect("/");
    } catch (error) {
      res
        .status(500)
        .send("Problem with posting from front end |", error.message);
    }
  },
  async postComment(req, res) {
    try {
      const comment = req.body.comment;
      const id = req.params._id;
      await axios.post(`http://localhost:3005/post/comment/${id}`, {
        comment: comment,
      });
      res.redirect("/");
    } catch (error) {
      res
        .status(500)
        .send("Problem with posting comment from front end |", error.message);
    }
  },
  async signup(req, res) {
    try {
      res.render("signup");
    } catch (error) {
      res
        .status(500)
        .send("Problem with getting the signup page|", error.message);
    }
  },
  async signupPost(req, res) {
    try {
      const { username, password } = req.body;
      await axios.post(`http://localhost:3005/post/signup`, {
        username: username,
        password: password,
      });
      console.log("prblem?");
      res.redirect("/login");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async login(req, res) {
    try {
      res.render("login");
    } catch (error) {
      res
        .status(500)
        .send("Problem with getting the log in page|", error.message);
    }
  },
  async loginPost(req, res) {
    try {
      if (req.body != "") {
        const { username, password } = req.body;
        const response = await axios.post(`http://localhost:3005/post/login`, {
          username: username,
          password: password,
        });

        if (response.data.success) {
          // Successful login, proceed with desired action
          await getAlldata(req, res);
        } else {
          // Invalid username or password
          alert("Invalid username or password");
        }
      }
    } catch (error) {
      res
        .status(500)
        .send("Problem with posting from login page |" + error.message);
    }
  },
};
