const mongoose = require("mongoose");
const schema = mongoose.Schema;

const sampleSchema = new schema(
  {
    _id: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

// {"_id":{"$oid":"5a9427648b0beebeb69579e7"},"name":"Mercedes Tyler","email":"mercedes_tyler@fakegmail.com","movie_id":{"$oid":"573a1390f29313caabcd4323"},"text":"Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.","date":{"$date":{"$numberLong":"1029646567000"}}}
const post = mongoose.model("comments", sampleSchema);
module.exports = {
  async postSampleFunction() {
    const randomVar = await post.find();
    console.log("Getting everything");
    return randomVar;
  },
};
