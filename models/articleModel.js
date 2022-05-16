const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    body: {
      type: String,
      required: [true, "Please add body"],
      minlength: [10, "Body must be at least 10 characters"],
    },
    comments: [
      {
        comment: {
          type: mongoose.Types.ObjectId,
          required: [true, "Please add a comment"],
          ref: "Comment",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
