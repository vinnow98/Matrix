const post = require("../model/post");

module.exports = {
  async getHomePage(req, res) {
    post
      .postFunction()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async getAbout(req, res) {
    post
      .postFunction2()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
