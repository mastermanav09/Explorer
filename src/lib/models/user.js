const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    image: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
