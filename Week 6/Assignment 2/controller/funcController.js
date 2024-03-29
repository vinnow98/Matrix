const post = require("../model/post");
const samplePost = require("../model/samplepost");

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
  async getSampleFunction(req, res) {
    samplePost
      .postSampleFunction()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
