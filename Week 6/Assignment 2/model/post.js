const mongoose = require("mongose");
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
