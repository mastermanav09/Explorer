const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },

    desc: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    userId: {
      type: String,
      // type: mongoose.Types.ObjectId,
      required: true,
      // ref: "User",
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// if there is an existing model already present in the database then return that only.
// otherwise create a new one.
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
