const express = require("express");
const cors = require("cors");
const app = express();
const port = 3006;
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3005"); // Fetch posts from backend
    const posts = response.data;

    for (let i = 0; i < posts.length; i++) {
      const responseComments = await axios.get(
        `http://localhost:3005/comment/${posts[i]._id}`
      );
      const commentsData = responseComments.data;
      console.log(commentsData);
      posts[i]["comments"] = commentsData;
    }

    res.render("home", {
      posts: posts,
    });
  } catch (error) {
    res.status(500).send("Error fetching posts from backend");
  }
});
app.post("/post", async (req, res) => {
  try {
    const { username, postText } = req.body;
    console.log("Submitted data:", { username, postText });
    await axios.post("http://localhost:3005/post", { username, postText });
    res.redirect("/");
  } catch (err) {
    console.log("Problem with posting from front end");
  }
});

//delete
app.get("/del/user/:_id", async (req, res) => {
  try {
    const response = await axios.delete(
      `http://localhost:3005/del/user/${req.params._id}`
    );
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error deleting");
  }
});

app.get("/update/user/:_id", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:3005/update/user/${req.params._id}`
    );
    res.render("edit", { response: response.data });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("error to get update page");
  }
});

app.post("/update/user/:_id", async (req, res) => {
  try {
    const { username, postText } = req.body;
    console.log("Submitted new data:", { username, postText });
    await axios.put(`http://localhost:3005/update/user/${req.params._id}`, {
      username,
      postText,
    });
    res.redirect("/");
  } catch (err) {
    console.log("Problem with posting from front end", err.message);
  }
});

app.post("/post/comment/:_id", async (req, res) => {
  try {
    const comment = req.body.comment;
    const id = req.params._id;
    console.log(id);
    await axios.post(`http://localhost:3005/post/comment/${id}`, {
      comment: comment,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Frontend Server is running on port ${port}`);
});
